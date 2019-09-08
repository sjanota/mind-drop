package storage

import (
	"context"
	"encoding/json"
	"github.com/mongodb/mongo-go-driver/mongo"
	"log"
	"net/http"
)

const (
	databaseName            = "mind-drop"
	appStatesCollectionName = "app-states"
)

type Storage struct {
	*repository
	db *mongo.Database
}

func New(uri string) (*Storage, error) {
	client, err := mongo.Connect(context.Background(), uri)
	if err != nil {
		return nil, err
	}

	database := client.Database(databaseName)
	return &Storage{
		db: database,
		repository: &repository{
			collection: database.Collection(appStatesCollectionName),
		},
	}, nil
}

func (s *Storage) Handle(rsp http.ResponseWriter, req *http.Request) {
	switch req.Method {
	case http.MethodGet:
		s.getAppState(rsp, req)
	case http.MethodPost:
		s.setAppState(rsp, req)
	}
}

func (s *Storage) getAppState(rsp http.ResponseWriter, req *http.Request) {
	filter := doc{
		"name": "global",
	}
	err := s.Find(req.Context(), filter, func(d decodeFunc) error {
		data := make(map[string]interface{})
		err := d(&data)
		if err != nil {
			return err
		}

		rsp.Header().Set("content-type", "application/json")
		enc := json.NewEncoder(rsp)
		err = enc.Encode(&data)
		if err != nil {
			return err
		}

		rsp.WriteHeader(200)
		return nil
	})
	if err != nil {
		log.Fatal(err)
	}
}

func (s *Storage) setAppState(rsp http.ResponseWriter, req *http.Request) {
	dec := json.NewDecoder(req.Body)
	data := make(map[string]interface{})
	err := dec.Decode(&data)
	if err != nil {
		return
	}

	_, err = s.collection.InsertOne(req.Context(), data)

	if err != nil {
		log.Fatal(err)
	}

	rsp.WriteHeader(201)
}



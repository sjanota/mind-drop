package storage

import (
	"context"
	"encoding/json"
	"github.com/sjanota/mind-drop/pkg/model"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/x/mongo/driver/connstring"
	"log"
	"net/http"
)

const (
	defaultDatabaseName     = "mind-drop"
	appStatesCollectionName = "app-states"
)

type Storage struct {
	*repository
	db *mongo.Database
}

func New(uri string) (*Storage, error) {
	opts := options.Client().ApplyURI(uri).SetRetryWrites(false)
	client, err := mongo.Connect(context.Background(), opts)
	if err != nil {
		return nil, err
	}

	cs, err := connstring.Parse(uri)
	if err != nil {
		return nil, err
	}

	database := client.Database(cs.Database)
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
		data := &model.AppState{}
		err := d(&data)
		if err != nil {
			return err
		}

		enc := json.NewEncoder(rsp)

		rsp.WriteHeader(200)
		rsp.Header().Set("content-type", "application/json")
		return enc.Encode(&data)
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

	_, err = s.collection.ReplaceOne(req.Context(), doc{"name": "global"}, data, options.Replace().SetUpsert(true))

	if err != nil {
		log.Fatal(err)
	}
	rsp.WriteHeader(201)
}



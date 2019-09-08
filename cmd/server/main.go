package main

import (
	"github.com/sjanota/mind-drop/pkg/server"
	storage2 "github.com/sjanota/mind-drop/pkg/storage"
	"log"
)

func main() {
	storage, err := storage2.New("mongodb://localhost:32768")
	if err != nil {
		log.Fatalf("Cannot create storage: %s", err)
	}

	server.Run(storage.Handle)
}
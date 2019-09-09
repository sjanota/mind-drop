package main

import (
	"github.com/sjanota/mind-drop/pkg/server"
	storage2 "github.com/sjanota/mind-drop/pkg/storage"
	"log"
	"os"
)

const defaultStorageUri = "mongodb://localhost:32768/mind-drop"

func main() {
	storageUri := os.Getenv("MONGODB_URI")
	if storageUri == "" {
		storageUri = defaultStorageUri
	}

	storage, err := storage2.New(storageUri)
	if err != nil {
		log.Fatalf("Cannot create storage: %s", err)
	}

	server.Run(storage.Handle)
}
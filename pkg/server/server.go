package server

import (
	"log"
	"net/http"
	"os"
)

const defaultPort = "8000"

func Run(handler http.HandlerFunc) {
	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}
	http.Handle("/app-data", handler)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}

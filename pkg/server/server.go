package server

import (
	"github.com/gorilla/handlers"
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
	http.Handle("/app-data", handlers.CORS(
		handlers.AllowedOrigins([]string{"*"}),
		handlers.AllowedHeaders([]string{"authorization"}),
	)(handler))
	log.Fatal(http.ListenAndServe(":"+port, nil))
}

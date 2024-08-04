package main

import (
	"log"
	"net/http"
	"time"

	"github.com/gorilla/mux"
	database "squidwock.com/backend/src/database"
)

func main() {
	db, err := database.NewDB("postgres", "admin", "postgres", "localhost")
	if err != nil {
		log.Fatal(err)
	}

	defer db.Close()

	r := mux.NewRouter()
	http.Handle("/", r)

	srv := &http.Server{
		Handler:      r,
		Addr:         "127.0.0.1:8000",
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
	}

	log.Fatal(srv.ListenAndServe())
}

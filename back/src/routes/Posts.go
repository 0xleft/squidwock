package routes

import (
	"database/sql"
	"net/http"

	"github.com/gorilla/mux"
)

func postEdit(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Post edit"))
}

func postCreate(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Post create"))
}

func postDelete(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Post delete"))
}

func postView(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Post view"))
}

func posts(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Post list"))
}

func Posts(r *mux.Router, db *sql.DB) {
	r.HandleFunc("/api/posts", posts)
	r.HandleFunc("/api/post/create", postCreate)
	r.HandleFunc("/api/post/{id}", postView)
	r.HandleFunc("/api/post/{id}/edit", postEdit)
	r.HandleFunc("/api/post/{id}/delete", postDelete)
}

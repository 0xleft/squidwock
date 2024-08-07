package routes

import (
	"database/sql"
	"net/http"

	"github.com/gorilla/mux"
)

func userEdit(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("User edit"))
}

func userView(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("User view"))
}

func userLogin(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("User login"))
}

func userLogout(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("User logout"))
}

func User(r *mux.Router, db *sql.DB) {
	r.HandleFunc("/api/user/login", userLogin)
	r.HandleFunc("/api/user/logout", userLogout)
	r.HandleFunc("/api/user/{id}", userView)
	r.HandleFunc("/api/user/{id}/edit", userEdit)
}

package back

import (
	"database/sql"
	"net/http"

	"github.com/gorilla/mux"
	"squidwock.com/backend/src/database"
)

type App struct {
	Router *mux.Router
	DB     *sql.DB
}

func (app *App) userLogout(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("User logout"))
}

func (app *App) userLogin(w http.ResponseWriter, r *http.Request) {
	query, err := app.DB.Prepare("SELECT * FROM users WHERE email = $1 AND password = $2")
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
	defer query.Close()

	email := r.FormValue("email")
	password := r.FormValue("password")

	if email == "" || password == "" {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	err = query.QueryRow(email, password).Scan()
	if err != nil {
		w.WriteHeader(http.StatusUnauthorized)
		return
	}

	// create session
	session, err := database.CreateSession(app.DB, email)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	w.Write([]byte(session))
}

func (app *App) userView(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("User view"))
}

func (app *App) userSelf(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("User self"))
}

func (app *App) userEdit(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("User edit"))
}

func (app *App) posts(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Posts"))
}

func (app *App) postCreate(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Post create"))
}

func (app *App) postView(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Post view"))
}

func (app *App) postEdit(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Post edit"))
}

func (app *App) postDelete(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Post delete"))
}

func (app *App) InitializeRoutes() {
	r := app.Router

	// user
	r.HandleFunc("/api/user/login", app.userLogin)
	r.HandleFunc("/api/user/logout", app.userLogout)
	r.HandleFunc("/api/user/self", app.userSelf)
	r.HandleFunc("/api/user/{id}", app.userView)
	r.HandleFunc("/api/user/{id}/edit", app.userEdit)

	// post
	r.HandleFunc("/api/posts", app.posts)
	r.HandleFunc("/api/post/create", app.postCreate)
	r.HandleFunc("/api/post/{id}", app.postView)
	r.HandleFunc("/api/post/{id}/edit", app.postEdit)
	r.HandleFunc("/api/post/{id}/delete", app.postDelete)
}

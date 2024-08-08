package database

import (
	"database/sql"

	"github.com/google/uuid"
)

type Session struct {
	Token    string
	Email    string
	Username string
}

func CreateSession(db *sql.DB, email string) (string, error) {
	token := uuid.New().String()
	query, err := db.Prepare("INSERT INTO sessions (token, email) VALUES ($1, $2)")
	if err != nil {
		return "", err
	}
	_, err = query.Exec(token, email)
	if err != nil {
		return "", err
	}
	return token, nil
}

func DeleteSession(db *sql.DB, token string) error {
	query, err := db.Prepare("DELETE FROM sessions WHERE token = $1")
	if err != nil {
		return err
	}
	_, err = query.Exec(token)
	if err != nil {
		return err
	}
	return nil
}

func GetSession(db *sql.DB, token string) (*Session, error) {
	var session Session
	query, err := db.Prepare("SELECT * FROM sessions WHERE token = $1")
	if err != nil {
		return nil, err
	}

	err = query.QueryRow(token).Scan(&session.Token, &session.Email)
	if err != nil {
		return nil, err
	}

	query, err = db.Prepare("SELECT * FROM users WHERE email = $1")
	if err != nil {
		return nil, err
	}

	err = query.QueryRow(session.Email).Scan(&session.Email, &session.Username)
	if err != nil {
		return nil, err
	}

	return &session, nil
}

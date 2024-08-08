package database

import (
	"database/sql"

	"github.com/google/uuid"
)

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

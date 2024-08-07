CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    role TEXT NOT NULL,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

CREATE TABLE IF NOT EXISTS posts (
    id SERIAL PRIMARY KEY,
    custom_id TEXT NOT NULL,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    user_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
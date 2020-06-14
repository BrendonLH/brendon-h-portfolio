DROP TABLE IF EXISTS profile;

CREATE TABLE profile (
    id SERIAL PRIMARY KEY,
    skills VARCHAR(255),
    courses VARCHAR(255),
    projects VARCHAR(8000)
);

DROP TABLE IF EXISTS login;

CREATE TABLE login (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    password VARCHAR(255)
)
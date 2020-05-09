DROP TABLE IF EXISTS projects;

CREATE TABLE projects(
    id SERIAL PRIMARY KEY,
    project_name VARCHAR(255),
    DESCRIPTION VARCHAR(255),
    authors VARCHAR(255),
    languages VARCHAR(255),
    DATE VARCHAR(255)
)

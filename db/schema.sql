-- Drops the blogger if it exists currently --
-- DROP DATABASE IF EXISTS project_2;--
-- Creates the "blogger" database --
CREATE DATABASE project_2;

USE project_2; 

CREATE TABLE users (
	id INTEGER NOT NULL AUTO_INCREMENT, 
    firstname VARCHAR(56),
    lastname VARCHAR (56),
    age INTEGER,
    country VARCHAR(32),
    progress INTEGER,
    PRIMARY KEY (id)
);

 -- SELECT * FROM users; --
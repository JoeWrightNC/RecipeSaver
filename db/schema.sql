CREATE DATABASE recipes_db;
USE recipes_db;

CREATE TABLE recipes
(
	id int NOT NULL AUTO_INCREMENT,
	recipeName VARCHAR(255) NOT NULL,
  recipeUrl VARCHAR(255) NOT NULL,
	tried BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

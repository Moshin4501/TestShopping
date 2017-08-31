DROP DATABASE IF EXISTS Shopping_user;

CREATE DATABASE Shopping_user;

USE Shopping_user;

CREATE TABLE list (
  id INT NOT NULL AUTO_INCREMENT,
  FirstName VARCHAR(45) NULL,
  LastName VARCHAR(45) NULL,
  password VARCHAR(45) NULL,
  hintPassword: VARCHAR(45) NULL,
  EmailAddress VARCHAR(45) NULL,
  PRIMARY KEY (id)
);

INSERT INTO list (FirstName, LastName, password, EmailAddress)
VALUES ("Moshin", "lalani","Family","everything" "Moshinlalani0786@gmail.com";


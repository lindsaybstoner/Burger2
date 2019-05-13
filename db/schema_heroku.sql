USE cth1rntue5pn8272;

CREATE TABLE burgers (
	id INT NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN,
	PRIMARY KEY (id)
);

SELECT * FROM burgers;
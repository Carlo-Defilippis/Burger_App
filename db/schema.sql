USE u1poemg1ww6qbakf;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	ate BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

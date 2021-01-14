DROP DATABASE IF EXISTS kanban_board_db;
CREATE DATABASE kanban_board_db;
USE kanban_board_db;

CREATE TABLE board(
	id INT UNIQUE AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(20) NOT NULL
	);

CREATE TABLE category(
	id INT UNIQUE AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    board_id INT NOT NULL,
    FOREIGN KEY (board_id) REFERENCES board(id)
    );
    
CREATE TABLE tag(
	id INT UNIQUE AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(25) NOT NULL
    );
    

CREATE TABLE color(
	id INT UNIQUE AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    hex_value CHAR(6) NOT NULL
    );
    
CREATE TABLE note(
	id INT UNIQUE AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    description TEXT,
    color_id INT,
    category_id INT,
    FOREIGN KEY (color_id) REFERENCES color(id),
    FOREIGN KEY (category_id) REFERENCES category(id)
    );

CREATE TABLE note_to_tag(
	note_id INT,
    tag_id INT,
    PRIMARY KEY (note_id, tag_id),
    FOREIGN KEY (note_id) REFERENCES note(id),
    FOREIGN KEY (tag_id) REFERENCES tag(id)
    );


INSERT INTO 
		color (name, hex_value) 
	VALUES 
		('Misty Rose', 'FDDFDF'),
        ('Cornsilk', 'FCF7DE'),
        ('Nyanza', 'DEFDE0'),
        ('Water', 'DEF3FD'),
        ('Lavender', 'F0DEFD');


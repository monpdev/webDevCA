CREATE TABLE friends(
  id INTEGER,
  name TEXT,
  birthday DATE
);

INSERT INTO friends (id, name, birthday)
VALUES(1, 'Jane Doe','1990-05-30');


INSERT INTO friends (id, name, birthday)
VALUES(2, 'Bob Lee','1990-07-30');

INSERT INTO friends (id, name, birthday)
VALUES(3, 'Abby Roady','1990-08-22');

SELECT *
FROM friends;

UPDATE friends
SET name = 'Jane Smith'
WHERE id = 1;



ALTER TABLE friends
ADD COLUMN email TEXT;

UPDATE friends
SET email = 'jane@abc.com'
WHERE id = 1;

UPDATE friends
SET email = 'bob@abc.com'
WHERE id = 2;

UPDATE friends
SET email = 'abby@abc.com'
WHERE id = 3;

DELETE FROM friends
WHERE id = 1;


SELECT *
FROM friends;
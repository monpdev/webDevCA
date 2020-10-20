//app challenge

const db = require('./db');

db.get("SELECT quantity FROM SpiceRack WHERE name='paprika'", (err, row) => {
  console.log(row.quantity);
});


//Code Challenge placeholder
const db = require('./db');

const selectByGenre = genre => {
  db.all("SELECT title FROM Song WHERE genre=$genre", { $genre: genre });
}



//Code Challenge 9
const db = require('./db');

db.all("SELECT * FROM Scientist WHERE field='biology'", (err, rows) => {
  console.log(rows);
});


//Code Challenge 10
const db = require('./db');

db.each("SELECT * FROM CartoonCharacter WHERE species='mouse'", (err, row) => {
  console.log(row.height);
});


//Code Challenge 11
//Drop the table Furniture if it exists, then create it again(in that order)
const db = require('./db');

db.serialize(() => {
  db.run("DROP TABLE IF EXISTS Furniture;");
  db.run("CREATE TABLE Furniture");
});



//Code Challenge 12
const db = require('./db');

const logCaffeineLevel = name => {
  db.get("SELECT * FROM Tea WHERE name=$name;", { $name: name }, (err, row) => {
    console.log(row.caffeine_level);
  })
}



//Code Challenge 13
//Insert a new bridge into the Bridge
const db = require('./db');

db.run("INSERT INTO Bridge (name, established_year) VALUES ('Brooklyn Bridge', 1883);");



//Code Challenge 14
const db = require('./db');

db.get("SELECT traffic FROM TrainStation WHERE station_id=38 AND month='April'", (err, row) => {
  console.log(row.traffic);
});




//Code Challenge 15
const db = require('./db');

const logFloorsForAddress = address => {
  db.get("SELECT number_of_floors FROM Building WHERE address=$address", { $address: address }, (err, row) => {
      console.log(row.number_of_floors);
  });
}




//Code Challenge 16
const db = require('./db');

db.run("INSERT INTO BirdOfParadise (scientific_name, common_name) VALUES ('Cicinnurus regius', 'king bird-of-paradise');");



//Code Challenge 17
//addMovie function
const db = require('./db');

const addMovie = (title, publicationYear, director) => {
	db.run('INSERT INTO Movie (title, publication_year, director) VALUES ($title, $pubYear, $director)', {
    $title: title,
    $pubYear: publicationYear,
    $director: director
  });
};





//Code Challenge 18
const db = require('./db');

db.each("SELECT * FROM Minifridge WHERE type='soda'", (err, row) => {
  console.log(row.name);
});


//Code Challenge 19
const db = require('./db');

db.run("INSERT INTO Holiday (name, work) VALUES ('Codecademy Day', false);");
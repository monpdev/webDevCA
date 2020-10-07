const { printQueryResults } = require('./utils');
const sqlite = require('sqlite3');

const db = new sqlite.Database('./db.sqlite');

// Your code below:
db.get("SELECT * FROM TemperatureData WHERE year = 1986", (error, row) => {
  printQueryResults(row); 
});
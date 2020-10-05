const { printQueryResults } = require('./utils');
// require the 'sqlite3' package here

// open up the SQLite database in './db.sqlite'
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db.sqlite');

db.all('SELECT * FROM TemperatureData ORDER BY year', (error, rows) => {
  if (error) {
    throw error;
  }
  printQueryResults(rows);
});
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./recipe.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT UNIQUE,
    password TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS recipes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    description TEXT,
    ingredients TEXT,
    instructions TEXT,
    created_by INTEGER,
    FOREIGN KEY (created_by) REFERENCES users(id)
  )`);
});

module.exports = db;

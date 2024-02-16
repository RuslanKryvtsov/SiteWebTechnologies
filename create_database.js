const fs = require('fs');

// Задаємо ім'я файлу бази даних і SQL-файлу
const databaseFile = 'database.db';
const sqlFile = 'database.sql';

// Визначаємо SQL-запит для створення таблиці "users"
const createTableQuery = `
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY,
  firstName TEXT,
  lastName TEXT,
  email TEXT,
  login TEXT,
  password TEXT
);
`;

// Визначаємо SQL-запит для створення таблиці "comments"
const createTableQuery1 = `
CREATE TABLE IF NOT EXISTS comments (
  id INTEGER PRIMARY KEY,
  comments TEXT
);
`;

// Записуємо обидва SQL-запити у файл database.sql
fs.writeFileSync(sqlFile, createTableQuery + createTableQuery1, 'utf8');

console.log(`Файл ${sqlFile} створено успішно.`);
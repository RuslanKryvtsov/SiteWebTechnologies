import express from 'express';
//const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');  

const app = express();
const port = 3000;

// Підключення до бази даних
//const db = new sqlite3.Database('database.db');

// Підключення до бази даних
const db = new sqlite3.Database('database.db');

// Читаємо SQL-скрипт і виконуємо його

const sqlScript = fs.readFileSync('database.sql', 'utf8');
db.exec(sqlScript, (err) => {
  if (err) {
    console.error('Помилка виконання SQL-скрипту:', err.message);
  } else {
    console.log('База даних створена успішно');
  }
});

// Створення таблиці для зберігання користувачів
db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, firstName TEXT, lastName TEXT, email TEXT, login TEXT, password TEXT)');

// Middleware для обробки JSON-даних
  app.use(bodyParser.json());

// app.use(express.json());

// Функція для обробки відправленої форми
app.post('/submit-form', (req, res) => {
  const formData = req.body;

  // Додавання користувача в базу даних
 // const stmt = db.prepare('INSERT INTO users (firstName, lastName, email, login, password) VALUES (?, ?, ?, ?, ?)');
 // stmt.run(formData.firstName, formData.lastName, formData.email, formData.login, formData.password);
 // stmt.finalize();

 // Додавання користувача в базу даних
const stmt = db.prepare('INSERT INTO users (firstName, lastName, email, login, password) VALUES (?, ?, ?, ?, ?)');
stmt.run(
  formData.firstName,
  formData.lastName,
  formData.email,
  formData.login,
  formData.password
);
stmt.finalize();

  console.log('Дані отримано на сервері:', formData);
  
  // Відправлення відповіді назад на клієнта
  res.json({ success: true, message: 'Дані успішно отримано та збережено на сервері.' });
});

// Функція для обробки відправленої форми коментарів
app.post('/submit-comments', (req, res) => {
  const formData = req.body;

  // Додавання коментаря в базу даних
  const stmtComments = db.prepare('INSERT INTO comments (comments) VALUES (?)');
  stmtComments.run(formData.Comments);
  stmtComments.finalize();

  console.log('Коментарі отримано на сервері:', formData);
  res.json({ success: true, message: 'Коментарі успішно вставлено.' });
});


// Маршрут для відображення index.html
app.get('/', (req, res) => {
  try {
    res.sendFile(path.join(__dirname, 'index.html'), (err) => {
      if (err) {
        console.error('Помилка під час відправлення index.html:', err.message);
        res.status(500).send('Помилка сервера');
      } else {
        console.log('index.html відправлено успішно');
      }
    });
  } catch (error) {
    console.error('Помилка під час спроби відправлення index.html:', error.message);
    res.status(500).send('Помилка сервера');
  }
});

// Маршрут для отримання всіх користувачів
app.get('/database', (req, res) => {
  const sql = 'SELECT * FROM users';
  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(rows);
  });
});

// Middleware для статичних файлів (стилі, скрипти та інші)
app.use(express.static(__dirname, {
  setHeaders: (res, path, stat) => {
    if (path.endsWith('styles.css') || path.endsWith('script.js')) {
      res.set('Content-Type', 'text/plain');
    }
  },
}));

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущений на http://localhost:${port}`);
});
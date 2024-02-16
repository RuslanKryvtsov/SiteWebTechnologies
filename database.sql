
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY,
  firstName TEXT,
  lastName TEXT,
  email TEXT,
  login TEXT,
  password TEXT
);

CREATE TABLE IF NOT EXISTS comments (
  id INTEGER PRIMARY KEY,
  comments TEXT
);

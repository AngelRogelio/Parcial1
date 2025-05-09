const express = require('express');
const mysql = require('mysql2');
const app = express();
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin', // tu contraseña
  database: 'b22100227'
});

db.connect(err => {
  if (err) throw err;
  console.log('Conectado a MySQL');
});

app.get('/usuarios', (req, res) => {
  db.query('SELECT * FROM cusuario', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.post('/usuarios', (req, res) => {
  const { nombre, apPaterno, apMaterno, login, password } = req.body;
  db.query(
    'INSERT INTO cusuario (nombre, apPaterno, apMaterno, login, password) VALUES (?, ?, ?, ?, ?)',
    [nombre, apPaterno, apMaterno, login, password],
    (err, result) => {
      if (err) throw err;
      res.json({ id: result.insertId, ...req.body });
    }
  );
});

app.listen(3000, () => {
  console.log('API escuchando en http://localhost:3000');
});

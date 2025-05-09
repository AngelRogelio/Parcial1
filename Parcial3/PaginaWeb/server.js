


const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware para parsear datos JSON
app.use(bodyParser.json());
// Middleware para parsear datos URL-encoded
app.use(cors());
// Middleware para registrar las solicitudes HTTP
app.use(morgan('dev'));
// Middleware 
app.use( express.urlencoded({extended : true,}))

// Simulación de conexión a base de datos (puedes agregar tu lógica real aquí)
const db = {
    query: (query, values, callback) => {
        console.log(`Simulando consulta: ${query} con valores: ${values}`);
        callback(null, { affectedRows: 1 }); // Simula una respuesta exitosa
    }
};

// Ruta para manejar datos enviados desde Thunder Client
app.post('/nombre', (req, res) => {
    const { nombre } = req.body;

    

    const query = 'INSERT INTO nombres (nombre) VALUES (?)';
    db.query(query, [nombre], (err, result) => {
        if (err) {
            console.error('Error al insertar en la base de datos:', err);
            return res.status(500).send('Error al guardar el nombre');
        }
        res.send("Guardado correctamente");
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

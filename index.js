const express = require('express')
const conectarDB = require('./config/db')
const app = express();

//Conectar a las BBDD
conectarDB();

// Habilitar express.json
app.use(express.json({extends: true}));

//Definir Puerto
const PORT = process.env.PORT || 4000;

// Importar rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/proyectos', require('./routes/proyectos'));

//Definir la página principal
app.get('/', (req, res) => {
    res.send('Hola Mundo')
})

// Arrancar el Puerto
app.listen(PORT, () => {
    console.log(`El servidor está funcionando en el puerto ${PORT}`)
})
const express = require('express');
const rutas = require('./rutas'); // Importar el enrutador desde rutas.js
const app = express();

const port = 5023;

// Usar el enrutador
app.use("/", rutas);

app.listen(port, () => {
    console.log(`Servidor corriendo en http://127.0.0.1:${port}`);
});
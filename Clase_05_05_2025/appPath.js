const express = require('express');
const path = require('path');

const app = express();

const port = 3005;

// Configurar la carpeta de archivos estáticos
app.use(express.static(path.join(__dirname)));

// Ruta principal
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Ruta 1
app.get("/ruta1", (req, res) => {
    res.send("<h1>Esta es la Ruta 1</h1>");
});

// Ruta 2
app.get("/ruta2", (req, res) => {
    res.send("<h1>Esta es la Ruta 2</h1>");
});

// Ruta 3
app.get("/ruta3", (req, res) => {
    res.send("<h1>Esta es la Ruta 3</h1>");
});

// Ruta 4
app.get("/ruta4", (req, res) => {
    res.send("<h1>Esta es la Ruta 4</h1>");
});

// Ruta 5
app.get("/ruta5", (req, res) => {
    res.send("<h1>Esta es la Ruta 5</h1>");
});

app.listen(port, () => {
    console.log(`http://127.0.0.1:${port}`);
});
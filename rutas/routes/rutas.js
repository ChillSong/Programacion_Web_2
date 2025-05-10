const express = require('express');
const path = require('path');
const router = express.Router();

// Configurar la carpeta de archivos estáticos
router.use(express.static(path.join(__dirname, '..', 'public')));

// Ruta principal
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

// Ruta adicional de ejemplo
router.get("/ruta1", (req, res) => {
    res.send("<h1>Esta es la Ruta 1</h1>");
});

module.exports = router;
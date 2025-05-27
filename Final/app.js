const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3006;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'Public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Allthread1.',
    database: 'node_crude',
    port: 3306
});

db.connect(err => {
    if (err) {
        console.error('Error conectando a la base de datos:', err.stack);
        return;
    }
    console.log('Conectado a la base de datos con id ' + db.threadId);
});

app.get('/', (req, res) => {
    const consultaDB = 'SELECT id, name, email FROM usuarios';

    db.query(consultaDB, (err, results) => {
        if (err) {
            console.error('Error al recuperar usuarios de la base de datos:', err);
            res.status(500).send('Error interno del servidor al recuperar los datos.');
        } else {
            res.render('index', { usuarios: results });
        }
    });
});

app.post('/add', (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).send('Nombre y correo electrónico son campos obligatorios.');
    }

    const insertarRegistro = 'INSERT INTO usuarios (name, email) VALUES (?, ?)';

    db.query(insertarRegistro, [name, email], (err, result) => {
        if (err) {
            console.error('Error al agregar usuario a la base de datos:', err);
            res.status(500).send('Error interno del servidor al agregar el usuario.');
        } else {
            console.log('Usuario añadido con ID:', result.insertId);
            res.redirect('/');
        }
    });
});

app.get('/edit/:id', (req, res) => {
    const { id } = req.params;
    const consultaDB = 'SELECT id, name, email FROM usuarios WHERE id = ?';

    db.query(consultaDB, [id], (err, results) => {
        if (err) {
            console.error(`Error al recuperar usuario con ID ${id} para edición:`, err);
            res.status(500).send('Error interno del servidor al recuperar los datos del usuario.');
        } else if (results.length === 0) {
            res.status(404).send('Usuario no encontrado.');
        } else {
            res.render('edit', { usuario: results[0] });
        }
    });
});

app.post('/update/:id', (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).send('Nombre y correo electrónico son campos obligatorios.');
    }

    const consultaDB = 'UPDATE usuarios SET name = ?, email = ? WHERE id = ?';

    db.query(consultaDB, [name, email, id], (err) => {
        if (err) {
            console.error(`Error al actualizar usuario con ID ${id}:`, err);
            res.status(500).send('Error interno del servidor al actualizar el usuario.');
        } else {
            console.log(`Usuario con ID ${id} actualizado correctamente.`);
            res.redirect('/');
        }
    });
});

app.get('/delete/:id', (req, res) => {
    const { id } = req.params;
    const consultaDB = 'DELETE FROM usuarios WHERE id = ?';

    db.query(consultaDB, [id], (err) => {
        if (err) {
            console.error(`Error al eliminar usuario con ID ${id}:`, err);
            res.status(500).send('Error interno del servidor al eliminar el usuario.');
        } else {
            console.log(`Usuario con ID ${id} eliminado correctamente.`);
            res.redirect('/');
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://127.0.0.1:${port}`);
});
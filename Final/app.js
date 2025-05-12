const express = require('express');
const mySQL = require('mysql');
const bodyParser = require('body-parser');

const app = express();
//manejo de peticiones de http por medio de req
app.use(bodyParser.urlencoded({ extended: false }));
//configuracion de platinlla
app.set('view engine', 'ejs');

const db = mySQL.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: node_crude,
    port: 3308
});


//validacion de base de datos

db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
    }else {
    console.log('Connected to the database');
    }
}
);
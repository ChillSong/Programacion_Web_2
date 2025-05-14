const express = require('express');
const mySQL = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
//manejo de peticiones de http por medio de req
app.use(bodyParser.urlencoded({ extended: false }));
//configuracion de platinlla
app.set('view engine', 'ejs');

const db = mySQL.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Allthread1.',
    database: 'node_crude',
    port: 3306
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


//inicio del server

const port = 3306;
app.listen(port,()=>{
    console.log(`http://127.0.0.1:${port}`)
});

//mostrar la lista de los usuarios
app.get('/',(req,res)=>{
    //consulta
    const consultaDB ='SELECT * FROM users';

    //trabajamos con la coneccion
    db.query(consultaDB , (err,results)=>{
        if(err){
            //no se encontro el usuario o se tiene un error
            console.error('Error al recuperar usuarios',err);
            //mostraremos informacion al usuario
            res.send('error, no se recuperan los datos de la DB');
        }else{
            res.render('index',{users:results});

        }

    });

});

//modulo para agregar el usuario

app.post('/add', (req,res)=>{
    const {name, email} = req.body;
    /*
        nombre : ari
        correo : correo@correo

        name : ari
        email: correo@correo
    */
    const insertarRegistro ='INSERT INTO usuarios (name , email) VALUE (?,?)';
    db.query(insertarRegistro,[name,email],(err)=>{
        if(err){
            console.error('error al agregar usuario:',err)
        }else{
            res.redirect('/');
        }

    });

});
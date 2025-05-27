//Importamos express
const express = require('express');


//creacion de una instancia 
const app = express();

//Definir el puerto
const port = 5009;

//Configuracion de la ruta get para la raiz ('/')
app.get('/');

app.get('/', (req, res)=>{ 
    res.send('Hola mundo');
    });
    
    app.listen(port);
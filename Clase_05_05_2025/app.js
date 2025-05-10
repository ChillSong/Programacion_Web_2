const express = require('express');
const app = express();

const port = 3005;

app.get("/",(req,res) =>{
    //res.send("Hola mundo");
    res.sendFile("C:\\Users\\anton\\Desktop\\Programacion_Web_2\\Clase_05_05_2025\\index.html");
});

app.listen(port, () =>{
    console.log(`http://127.0.0.1:${port}`);
});
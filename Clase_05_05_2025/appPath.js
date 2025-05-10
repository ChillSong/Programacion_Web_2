const express = require('express');
const path = require('path');

const app = express();

const port = 3005;

// Configurar la carpeta de archivos estáticos
app.use(express.static(path.join(__dirname)));

app.get("/",(req,res) =>{
    //res.send("Hola mundo");
    //res.sendFile("C:/Users/misae/Documents/web2/node/05052025/index.html");
    res.sendFile(path.join(__dirname+"/index.html"));
});

app.listen(port, () =>{
    console.log(`http://127.0.0.1:${port}`);
});
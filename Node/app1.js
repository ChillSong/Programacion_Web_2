const PaquetesServidorNodeImportado = require('http');

const port = 3000;  

const server = PaquetesServidorNodeImportado.createServer((req, res) => {
    //establecer el encabezado de respuesta
    res.writeHead(200, {'Content-Type': 'text/plain'});	
    res.end('Hello World\n'); //enviar la respuesta al cliente
});

//escuchar el puerto

server.listen(port, () => {
    console.log(`servido ejecutandose por medio de http://localhost:${port}`); //mensaje de confirmación
});
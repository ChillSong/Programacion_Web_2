/*let numeroMaquina = Math.floor(Math.random()*(10-1)+1);
console.log(numeroMaquina);*/
let numeroJuego = Math.floor(Math.random()*(10-1)+1);

let numeroUsuario = parseInt(prompt("Ingrese un número entre 1 y 10"));
let vidaUsuario = 5;

while (vidaUsuario > 0  ){
    vidaUsuario--;
    console.log("Te quedan "+vidaUsuario+" vidas");
    numeroUsuario = parseInt(prompt("Ingrese un número entre 1 y 10"));
    if (numeroUsuario === numeroJuego){
        console.log("Ganaste");
        break;}
}

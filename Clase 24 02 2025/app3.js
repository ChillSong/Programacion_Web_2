/*saludar();
function saludar(){
    console.log('Hola Mundo');
}
despedida('Miamorherosoqueamotantocontodomicorazon<33333');
function despedida(nombre){
    console.log('Chau '+nombre);

}

function operacion (numero){
    let a = 54;
    let b = 23;
    let calculo = (a+b)*numero;
    return calculo;

}

console.log(operacion(2));*/
function suma(numero1, numero2){
    return parseInt(numero1) + parseInt(numero2);
}

let numero1 = prompt("Ingrese un número: ");
let numero2 = prompt("Ingrese otro número: ");

console.log("La suma de los números es: " + suma(numero1, numero2));
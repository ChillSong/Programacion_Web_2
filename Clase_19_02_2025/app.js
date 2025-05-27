var dato1 = prompt("Ingrese un número: ");
var dato2 = prompt("Ingrese otro número: ");

if(dato1 > dato2){
    console.log("El número " + dato1 + " es mayor que " + dato2);
} else if(dato1 < dato2){
    console.log("El número " + dato1 + " es menor que " + dato2);
} else {
    console.log("Los números son iguales");
}
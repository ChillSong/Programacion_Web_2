var dato1 = Number(prompt("Ingrese un número: "));
var dato2 = Number(prompt("Ingrese otro número: "));
var dato3 = Number(prompt("Ingrese un tercer número: "));

if(dato1 > dato2 && dato1 > dato3){
    console.log("El número " + dato1 + " es el mayor de los tres");
} else if(dato2 > dato1 && dato2 > dato3){
    console.log("El número " + dato2 + " es el mayor de los tres");
} else if(dato3 > dato1 && dato3 > dato2){
    console.log("El número " + dato3 + " es el mayor de los tres");
} else if (dato1 == dato2 && dato1 == dato3){
    console.log("Los tres números son iguales");
} else if (dato1 == dato2 && dato1 > dato3){
    console.log("Los números " + dato1 + " y " + dato2 + " son iguales y mayores que " + dato3);
} else if (dato1 == dato3 && dato1 > dato2){
    console.log("Los números " + dato1 + " y " + dato3 + " son iguales y mayores que " + dato2);
} else if (dato2 == dato3 && dato2 > dato1){
    console.log("Los números " + dato2 + " y " + dato3 + " son iguales y mayores que " + dato1);
} else if (dato1 == dato2 && dato1 < dato3){
    console.log("Los números " + dato1 + " y " + dato2 + " son iguales y menores que " + dato3);
}
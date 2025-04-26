function suma(numero1, numero2){
    return parseInt(numero1) + parseInt(numero2);
}

function resta(numero1, numero2){
    return parseInt(numero1) - parseInt(numero2);
}

function multiplicacion(numero1, numero2){
    return parseInt(numero1) * parseInt(numero2);
}

function division(numero1, numero2){
    return parseInt(numero1) / parseInt(numero2);
}

let numero1 = prompt("Ingrese un número: ");
let numero2 = prompt("Ingrese otro número: ");

let eleccion = prompt("Ingrese la operación que desea realizar: suma, resta, multiplicación o división");


switch(eleccion){
    case "suma":
        console.log("La suma de los números es: " + suma(numero1, numero2));
        break;
    case "resta":
        console.log("La resta de los números es: " + resta(numero1, numero2));
        break;
    case "multiplicación":
        console.log("La multiplicación de los números es: " + multiplicacion(numero1, numero2));
        break;
    case "división":
        console.log("La división de los números es: " + division(numero1, numero2));
        break;
    default:
        console.log("Operación no válida");
        break;
}
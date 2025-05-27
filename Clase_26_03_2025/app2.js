//funcion declarativa
function numeroAleatorio(min, max){
    return Math.floor(Math.random()*(max-min)+min);
}
//incoco la funcion
console.log(numeroAleatorio(1,11))


//funcion expresada
const miNumero = function(min, max){
    return Math.floor(Math.random()*(max-min)+min);
}
console.log(miNumero(10,35))

//funcion flecha
function dato(a){
    return a+100;
}
var datos = function (a){
    return a+100;
}
var datos = (a)=>{
    return a+100;
}
var datos = (a)=> {return a+100;
}
var datos = a => a+100;

//felcha
function numeroAleatorioflecha(min, max){
    return Math.floor(Math.random()*(max-min)+min);
}

let numeroAleatorioflecha= (min, max) => Math.floor(Math.random()*(max-min)+min);

//
const array1 = ['a','b','c','d'];
array1.forEach(element => console.log(element));
/*
array1.forEach(function callback(currentValue, index, array){
    //iterador

});
*/
let frutas = ['manzana','banana','pera','uva','sandia'];	

//frutas.forEach(frutas => console.log(element));
frutas.forEach((frutas, index, array) => {
    console.log(index);
});

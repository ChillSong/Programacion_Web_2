let resultado = true && false;
let resultado2 = true && true;
console.log("AND");
console.log("1" + "|0" +"|" + "0" + "->" + resultado); // false
console.log("1" + "|1" +"|" + "1" + "->" + resultado2); // true
console.log("0" + "|0" +"|" + "0" + "->" + resultado); // false
console.log("0" + "|1" +"|" + "0" + "->" + resultado); // false
console.log("OR");
resultado = true || false;
console.log("1" + "|0" +"|" + "1" + "->" + resultado2); // true
console.log("1" + "|1" +"|" + "1" + "->" + resultado2); // true
console.log("0" + "|0" +"|" + "0" + "->" + resultado); // false
console.log("0" + "|1" +"|" + "1" + "->" + resultado2); // true
console.log("NOT");
resultado = !true; 
console.log("1" + "|0" + "->" + resultado); // false
console.log("0" + "|1" + "->" + resultado2); // true
console.log("1" + "|1" + "->" + resultado); // false
console.log("0" + "|0" + "->" + resultado2); // true
/**
 * AND
 * NOT
 * OR
 */



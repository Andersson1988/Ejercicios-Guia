/*Ejercicio 3
Resuelva la siguiente expresión paso a paso:

Entero a = 2
Real b = 3.7  

(15>=7*b) || ((43-8*2/4) != (b*5/2)) */


let  a=2
let b=parseFloat(3.7); //variables//
// primera parte //
let multiplicacion1=7*b;
let mayorigual=15>=multiplicacion1;
// intermedio //
//Segunda parte //
let multiplicacion2=8*2;
let division1=multiplicacion2/4;
let resta=43-division1;
// intermedio //
//Tercer parte//
let multiplicacion3=b*5;
let division2=multiplicacion3/2;
// Solucion intermedio segunda y tercer parte //
let solucion1=resta!=division2;
// Solucion intermedio primera con la solucion de la segunda y tercer parte //
let solucion2=mayorigual||solucion1;
// console.log(mayorigual); //
// console.log(solucion1); //
console.log(solucion2);





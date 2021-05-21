/*Ejercicio 2
Resuelva la siguiente expresión paso a paso:

Entero a = 3, 
Real b = 7  

(5*b%(17-4%7+3))>b == (b-a*4.7)>23  */

// Primera parte
let  a=3, b=7; //variables//
let modulo1=4%7; //-4 tener en cuenta signo negativo//
let resta1=17-modulo1; //13
let suma=resta1+3;  //16
let multiplicacion1=5*b; //35
let modulo2=multiplicacion1%suma; // 3 //
let comparacion1=modulo2>b; // false //
// == //
// Segunda parte //
let multiplicacion2=parseFloat(a*4.7); // -14.100 tener en cuenta signo negativo //
let resta2=b-multiplicacion2; // -7.100 //
let comparacion2=resta2>23; // false //
// Valor final //
let solucion=comparacion1==comparacion2; //true

console.log(solucion);




// console.log(comparacion1);
// console.log(comparacion2);




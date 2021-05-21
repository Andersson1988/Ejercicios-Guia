/*Ejercicio 1
Resuelva la siguiente expresión paso a paso:

Entero a = 3, b = 7   Constante Real  c = 1.5       5*b-(17-4%7+3)*c-a */


let  a=3, b=7; // a ==> parte final de operacion//
const c=parseFloat(1.5);
let modulo=4%b; //realizamos modulo de 4%7 = 4 tener en cuenta el signo menos -4 //
let resta=17-modulo;//17-4=13
let suma=resta+3; // 17+3=16 ahi que tener en cuenta el signo negativo que antecede los parentesis -16//
let multiplicacion1=5*b; // 35 //  35-16*c-a //
let multiplicacion2=suma*c; //-16*1.5=24 // 35-24-a //
let resultado=multiplicacion1-multiplicacion2-a;

console.log(resultado);
// console.log(modulo);



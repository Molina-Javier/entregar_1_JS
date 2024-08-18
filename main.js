// Ejercicios:

/*1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.


let num = prompt("ingrese un numero para saber si es par o impar");

const parOImpar = (num) => {
    if (num % 2 === 0) {
        console.log(`El numero ${num} es par`)
    } else {
        console.log(`El numero ${num} es impar`)
    } return
};

 parOImpar(num);
 
 */

// -----------------------------------------------


 /*2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

 let num1 = prompt("Ingrese un numero");
 let num2 = prompt("Ingrese otro numero para saber si es mayor o igual que el primer numero que ingreso");

 const mayor = (num1, num2) => {
    if (num1>num2) {
        console.log(`El numero ${num1} es mayor que ${num2}`)
    } else if (num1<num2) {
        console.log(`El numero ${num2} es mayor que ${num1}`)
    } else {
        console.log(`Los numeros son iguales`)
    }
 };

 mayor(num1,num2);
 */

// ---------------------------------------------------

 /*3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

 let num = prompt("Ingrese un numero");

 const multiploDe5 = (num) => {
    if (num % 5 === 0) {
         console.log(`El numero ${num} es multiplo de 5`)
    } else {
        console.log(`El numero ${num} no es multiplo de 5`)
    }
 };
 multiploDe5(num);

 */

//  -----------------------------------------------------

 /*4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

let numero = prompt("ingrese un numero");

const escaleraAscendente = (numero) => {
 for (let i = 0; i <= numero; i++) {
    console.log(i)
      }
};
escaleraAscendente(numero);

*/

// -------------------------------------------------------

/*5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

let palabra = prompt("Ingrese una palabra");
let veces = prompt("Ingrese un numero");

const palabraRepetida = (palabra , veces) => {
    for (let i = 1; i <= veces ; i++)
    console.log(palabra)


};
palabraRepetida(palabra , veces);

*/

// -------------------------------------------------------

/*6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

const array = [1, 2, 3, 4, 5, 15];

// console.log(array)

const valoresArray = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
        
    };
};

valoresArray(array);
*/

// ----------------------------------------------------------

/*7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

const arr = [ 1,91, 88, 64, 55, 6,10, 82, 96,14];

const arrMenosEl5To = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (i === 4) {
            continue
            break
        } else {
            console.log(arr[i]);
        }
        
    }
};

arrMenosEl5To(arr);

*/

// -----------------------------------------------------------

/*8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.*/


const array = [12, 23, 34, 45, 56, 67, 78, 89, 910];
const numero = 9;

const arrayMultiplicado = (array,numero) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]*numero);
        
    }
}
arrayMultiplicado(array,numero);


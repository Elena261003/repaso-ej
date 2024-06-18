// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

// 1 Escribe una función que reciba un número y lo devuelva sumando 2.

function sumarDos(number) {
  return number + 2;
}

let result = sumarDos(3);
console.log(result);

//Correcto

const sumNumbers = number => {
  return number + 2;
};
const resultSumNumbers = sumNumbers(3);
console.log(resultSumNumbers);

//2 Escribe una función que reciba un número y devuelva el doble de ese número.

function numeroDoble(number) {
  return number * 2;
}

let resultado = numeroDoble(4);
console.log(resultado);

//Correcto
const doubleNumber = number => {
  return number * 2;
};
const resultDoubleNumber = doubleNumber(4);
console.log(resultDoubleNumber);

//3 Escribe una función que reciba una palabra y devuelva su longitud.

function obtenerLongitud(palabra) {
  return palabra.length;
}
let longitud = obtenerLongitud('Hello');
console.log(longitud);

//Correcto

const lengthWord = word => {
  return word.length;
};

const resultLength = lengthWord('Elena');
console.log(resultLength);

//4 Escribe una función que reciba una palabra y la imprima en mayúsculas.

function imprimirEnMayusculas(palabra) {
  console.log(palabra.toUpperCase());
}

imprimirEnMayusculas('Hola');

//5 Escribe una función que reciba dos palabras e imprima si son iguales o no

function sonIguales(palabra1, palabra2) {
  if (palabra1 === palabra2) {
    console.log('Son iguales');
  } else {
    console.log('No son iguales');
  }
}
sonIguales('hola', 'hola');
sonIguales('hola', 'Hello');

//6 Crea una función que tome dos números como parámetro y devuelva su multiplicación.

const multiplyTwoNumbers = (num1, num2) => {
  return num1 * num2;
};
const resultMultiply = multiplyTwoNumbers(5, 7);
console.log(resultMultiply);

// 7 Crea una función llamada sumDigits que tome un número de 3 cifras como parámetro y devuelva la suma de sus dígitos.

const sumDigits = (number1, number2, number3) => {
  return number1 + number2 + number3;
};
const resultSumDigits = sumDigits(3, 16, 24);
console.log(resultSumDigits);

// 8 Crea una función llamada longestWord que reciba 2 palabras como parámetro y devuelva la palabra más larga.

const longestWord = (word1, word2) => {
  if (word1.length > word2.length) {
    return word1;
  } else {
    return word2;
  }
};
const resultLongestWord = longestWord('Hola', 'palabra');
console.log(resultLongestWord);

// 9 Escribe una función llamada getfirstElement que reciba un array y devuelva la primera posición del array.

const getFirstElement = array => {
  return array[0];
};
const resultFirstArray = getFirstElement('palabra');
console.log(resultFirstArray);

//10 Escribe una función llamada getArrayElement que reciba un array y una posición y devuelva el valor de esa posición en el array, por ejemplo, si recibe (['a', 'b', 'c'], 2) devolverá 'c'

const getArrayElement = (array, posicion) => {
  return array[posicion];
};
const rusultGetArrayElement = (['a', 'b', 'c'], 1);
console.log(rusultGetArrayElement);

//11 Crea una función llamada shortestWord que reciba 2 palabras como parámetro y devuelva la palabra más corta.
const shortestWord = (word1, word2) => {
  if (word1.length > word2.length) {
    return word2;
  } else {
    return word1;
  }
};
const resultShortestWord = shortestWord('animal', 'fruta');
console.log(resultShortestWord);

// 12 Crea una función llamada onlyEven que reciba 3 números e imprima sólo los números pares.

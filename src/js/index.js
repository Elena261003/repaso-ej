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
/*const onlyEven = (num1, num2, num3) => {
  [num1, num2, num3].forEach(num => {
    if (num % 2 === 0) {
      console.log(num);
    }
  });
};
const resultOnlyEven = onlyEven(3, 4, 6);
console.log(resultOnlyEven);
*/
const cuadradoYCubo = numero => {
  return {
    cuadrado: Math.pow(numero, 2),
    cubo: Math.pow(numero, 3)
  };
};

const resultCuadradoYCubo = cuadradoYCubo(6);
console.log(resultCuadradoYCubo);

const imprimirLetrasSeparadas = palabra => {
  if (palabra.length === 5) {
    console.log(palabra.split('').join(','));
  } else {
    console.log('La palabra no tiene 5 letras');
  }
};

const resultLetrasSeparadas = imprimirLetrasSeparadas('Letra');
console.log(resultLetrasSeparadas);

const duplicarArray = array => {
  if (array.length === 3) {
    console.log([...array, ...array]);
  } else {
    console.log('El array no tiene 3 elementos');
  }
};

const resultDublicarArray = duplicarArray(123);
console.log(resultDublicarArray);

const imprimirSinPrimerUltimo = array => {
  if (array.length === 5) {
    console.log(array.slice(1, -1));
  } else {
    console.log('El array no tiene 5 elementos');
  }
};

//Objeto

const user = {
  name: 'Elena', //propiedad
  age: 20, //propiedad
  address: {
    //propiedad
    city: 'Madrid' //propiedad
  }
};
console.log(user.name);
console.log(user.age);
console.log(user.address.city);

//clave:valor -> key: value
//

//Callback -> función que ejecuta otra función

const printData = data => {
  console.log(data);
};

/*const doubleNumber = (number, cb) => {
  const double = number * 2;
  cb(double);
};
doubleNumber(4, printData);
*/

//forEach

const letters = ['a', 'b', 'c', 'd'];

letters.forEach(letter => {
  console.log(letter.toUpperCase());
});

//IMPERATIVA - le decimos al programa paso a paso lo que tiene que hacer

//DECLARATIVA - Le decimos al programa el resultado que esperamos. Cómo llega el programa al resultado nos da igual.

const lettersUpperFoeEach = letters.forEach(letter => {
  return letter.toUpperCase();
});

//MAP

letters.map(letter => {
  console.log(letter);
});

const lettersUpperMap = letters.map(letter => {
  return letter.toUpperCase();
});
console.log(lettersUpperMap);

const numbers = [1, 2, 3, 4, 5];

const doubleNumbers = numbers.map(number => {
  return number * 2;
});
console.log(doubleNumbers);

//FILTER

const onlyEven = numbers.filter(number => {
  return number % 2 === 0;
  // debajo del "return" no se va a ejecutar
});

console.log(onlyEven);

//EVERY

const areAllEven = numbers.every(number => {
  return number > 0;
});

console.log(areAllEven);

//SOME

const areSomeEven = numbers.some(number => {
  return number % 2 === 0;
});
console.log(areSomeEven);

//FIND

const findElement = numbers.find(number => {
  return number > 2;
});
console.log(findElement);

//SORT

//REDUCE
//(el 1 es igual que el 2 pero el 2 es más pequeño)

//1.

//let total = 0;
// for (const number of numbers) {
//   total += number;
// }

// console.log(total);

//2.
const totalReduce = numbers.reduce((total, number) => {
  return (total += number);
});

console.log(totalReduce);

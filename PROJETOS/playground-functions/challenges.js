// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let resultado = (base * height) / 2;
  return resultado;
}

// Desafio 3
function splitSentence(array) {
  let splits = array.split(' ', array.length);
  return splits;
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let vito = wins * 3;
  let empa = ties * 1;
  let result = vito + empa;
  return result;
}

// Desafio 6
function highestCount(numbers) {
  let maior = numbers[0];
  let contador = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (maior === numbers[index]) {
      contador += 1;
    } else if (maior < numbers[index]) {
      maior = numbers[index];
      contador = 0;
      index = 0;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  }
  if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  let rece = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      rece[index] = 'fizzBuzz';
    } else if (array[index] % 3 === 0) {
      rece[index] = 'fizz';
    } else if (array[index] % 5 === 0) {
      rece[index] = 'buzz';
    } else {
      rece[index] = 'bug!';
    }
  } return rece;
}

// Desafio 9
function encode(array) {
  let isso = ['a', 'e', 'i', 'o', 'u'];
  let por = ['1', '2', '3', '4', '5'];
  return array.replace(array, por, isso);
}
function decode(array) {
  let isso = ['1', '2', '3', '4', '5'];
  let por = ['a', 'e', 'i', 'o', 'u'];
  return array.replace(isso, por, isso);
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};

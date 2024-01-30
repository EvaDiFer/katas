// Buscar la palabra más larga
// Completa la función que tomando un array de strings
// como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
// Puedes usar este array para probar tu función:

const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.',
];

function palabraMasLarga(words) {
  let longestWord = '';

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord;
}

const result = palabraMasLarga(avengers);
console.log(result);

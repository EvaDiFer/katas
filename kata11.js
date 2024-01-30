// Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume
//  y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:

// pista (typeof)

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(arr) {
  let sum = 0;
  let count = 0;

  for (const element of arr) {
    if (typeof element === 'number' || typeof element === 'string') {
      sum += typeof element === 'number' ? element : element.length;
      count++;
    }
  }

  const average = count > 0 ? sum / count : 0;

  return average;
}

const result = averageWord(mixedElements);
console.log('El promedio es:', result);

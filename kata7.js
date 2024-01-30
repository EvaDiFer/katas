// Completa la función que tomando dos números como argumento devuelva el más alto.
function sum(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return numberOne;
  } else {
    return numberTwo;
  }
}

// let resultado = sum(5, 10);     Se han probado más opciones, funcionan todas
let resultado = sum(30, 14);
console.log(resultado);

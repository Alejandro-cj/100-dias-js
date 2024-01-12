const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función que toma un array de números y devuelve su suma
function sumarNumeros(numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  return suma;
}

// Proyecto Pequeño
function proyectoPequeno() {
  rl.question('Ingresa números separados por espacios: ', function(input) {
    // Convertir la entrada en un array de números
    const numeros = input.split(' ').map(Number);

    // Verificar si la entrada es válida
    if (numeros.some(isNaN)) {
      console.log('Por favor, ingresa números válidos.');
    } else {
      // Llamar a la función sumarNumeros y mostrar el resultado
      const resultado = sumarNumeros(numeros);
      console.log('La suma de los números es:', resultado);
    }

    rl.close();
  });
}

proyectoPequeno();



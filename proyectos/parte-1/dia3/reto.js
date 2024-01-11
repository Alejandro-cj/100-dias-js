const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function verificarEdad() {
  rl.question('Por favor, ingresa tu edad: ', function(edad) {
    // Verificar si se ingresó una edad válida (un número)
    if (!isNaN(edad)) {
      // Utilizando la estructura ternaria para verificar si es mayor o menor de edad
      const mensaje = edad >= 18 ? 'Eres mayor de edad.' : 'Eres menor de edad.';
      console.log(mensaje);
    } else {
      console.log('Por favor, ingresa una edad válida.');
    }

    rl.close();
  });
}

verificarEdad();

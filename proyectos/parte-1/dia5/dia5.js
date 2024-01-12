const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// Objeto con propiedades y método
let persona = {
    nombre: 'Juan',
    edad: 25,
    saludar: function() {
      console.log('¡Hola!');
    }
  };
  
  // Acceder a las propiedades del objeto
  console.log('Nombre:', persona.nombre);
  console.log('Edad:', persona.edad);
  
  // Llamar al método del objeto
  persona.saludar();
  
  // Proyecto con funciones
  function calcularPromedio(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
      suma += numeros[i];
    }
    return suma / numeros.length;
  }
  
  function proyectoConFunciones() {
    rl.question('Ingresa números separados por espacios: ', function(input) {
      const numeros = input.split(' ').map(Number);
  
      if (numeros.some(isNaN)) {
        console.log('Por favor, ingresa números válidos.');
      } else {
        const promedio = calcularPromedio(numeros);
        console.log('El promedio de los números es:', promedio);
      }
  
      rl.close();
    });
  }
  
  proyectoConFunciones();
  
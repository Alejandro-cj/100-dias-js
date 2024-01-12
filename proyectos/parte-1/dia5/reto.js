const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Proyecto Pequeño
function proyectoPequeno() {
  // Crear un objeto representando a una persona
  let persona = {
    nombre: 'Juan',
    edad: 25,
    lugarResidencia: 'Ciudad XYZ'
  };

  // Imprimir propiedades del objeto en la consola
  console.log('Nombre:', persona.nombre);
  console.log('Edad:', persona.edad);
  console.log('Lugar de Residencia:', persona.lugarResidencia);

  rl.close();
}

proyectoPequeno();


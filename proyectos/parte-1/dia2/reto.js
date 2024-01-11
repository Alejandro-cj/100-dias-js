const readline = require('readline');

// Crear una interfaz de lectura y escritura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función que solicita el nombre del usuario y le da la bienvenida
function darBienvenida() {
  // Preguntar al usuario su nombre
  rl.question('Por favor, ingresa tu nombre: ', function(nombreUsuario) {
    // Verificar si se ingresó un nombre
    if (nombreUsuario) {
      // Llamar a la función de saludo
      saludar(nombreUsuario);
    } else {
      // Si no se ingresó un nombre, mostrar un mensaje predeterminado
      console.log('Hola, desconocido. ¡Gracias por visitar!');
    }

    // Cerrar la interfaz de lectura y escritura
    rl.close();
  });
}

// Función que saluda al usuario
function saludar(nombre) {
  console.log(`¡Hola, ${nombre}! Bienvenido.`);
}

// Llamar a la función principal para iniciar el programa
darBienvenida();

// Proyecto Pequeño - Día 2

// Función que solicita el nombre del usuario y le da la bienvenida
function darBienvenida() {
    // Solicitar nombre al usuario
    let nombreUsuario = prompt("Por favor, ingresa tu nombre:");
  
    // Verificar si se ingresó un nombre
    if (nombreUsuario) {
      // Llamar a la función de saludo
      saludar(nombreUsuario);
    } else {
      // Si no se ingresó un nombre, mostrar un mensaje predeterminado
      console.log("Hola, desconocido. ¡Gracias por visitar!");
    }
  }
  
  // Función que saluda al usuario
  function saludar(nombre) {
    console.log(`¡Hola, ${nombre}! Bienvenido.`);
  }
  
  // Llamar a la función principal para iniciar el programa
  darBienvenida();
  
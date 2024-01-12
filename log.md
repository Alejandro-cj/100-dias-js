# dia 1: fundamentos basicos y primeros pasos 
    Aprendi como declara una variable en js y le asigne un valor 
    I learned how to declare a variable in JS and assigned a value to it
    Una variable es un espacio de almacenamiento para guardar valores Se declaran con let o const
    A variable is a storage space for storing values. They are declared with let or const

    aprendi condicionales. permiten diferenciar bloques de codigos segun una condicion
    I learned conditionals. Differentiate code blocks according to a condition


    Bucles (for): Permiten repetir bloques de código varias veces.
    Loops (for): They allow you to repeat blocks of code multiple times.

# Día 2: Profundizando en Fundamentos y Primer Proyecto

    Los operadores realizan operaciones entre valores. + * - /
    Las funciones son bloques de código reutilizables. Se declaran con function.
    
#  Día 3: Explorando Operadores y Estructuras de Control

    Hasta ahora, hemos utilizado operadores básicos como suma (+), resta (-), multiplicación (*), y división (/).
    También existen operadores de comparación (===, !==, <, >, <=, >=) y operadores lógicos (&&, ||, !).

#  Dia 4: profundizando en funciones y trabajos con Arrays

    las funciones son bloques de codigos reutilizables.
    pueden tomar parametros y devolver valores.

#  Día 5: Manipulación de Objetos y Proyecto con Funciones

    Estructuras que permiten almacenar datos en pares clave-valor.
    Pueden contener propiedades y métodos.

#  Día 6: Manipulación del DOM y Eventos

    Representación estructurada de un documento HTML que permite interactuar con él mediante programación.
    Los elementos del DOM pueden ser accedidos y manipulados con JavaScript.


#   Día 7: Introducción a AJAX y Consumo de API
    Repaso Rápido:
    AJAX (Asynchronous JavaScript and XML):

    Técnica que permite realizar solicitudes asíncronas al servidor desde el navegador sin recargar la página.
    Se utiliza para obtener y enviar datos en segundo plano.
    Ejemplo de solicitud con XMLHttpRequest:
    let solicitud = new XMLHttpRequest();
    solicitud.open('GET', 'https://api.example.com/data', true);
    solicitud.onreadystatechange = function() {
        if (solicitud.readyState === 4 && solicitud.status === 200) {
        let datos = JSON.parse(solicitud.responseText);
    console.log(datos);
    }
    };
    solicitud.send();

# Día 8: Manipulación de Elementos HTML y CSS con JavaScript
    Repaso Rápido:
    Manipulación de Estilos con JavaScript:
    
    Cambiar y manipular estilos CSS de elementos HTML.

#        Manipulación de Clases con JavaScript:

        Agregar, quitar y alternar clases en elementos HTML.
        Ejemplo de agregar una clase:
        javascript
        
        let elemento = document.getElementById('miElemento');
        elemento.classList.add('miClase');
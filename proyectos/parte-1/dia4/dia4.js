// funcion que suma dos numeros 

function sumar(a, b) {
    return a + b;
}

// llamada a la funcion de suma
let resultadoSuma = sumar(5, 3);
console.log('la suma es:', resultadoSuma);

// arrays: declara e indexacion

let frutas = ['manzana', 'platano', 'uva'];

// acceder a un elemento del array 
console.log('la primera fruta es:', frutas[0]);

// añadir unn elemento al final del array
frutas.push('naranja');
console.log('despues de añadir una fruta:', frutas);

// recorrer un array con un bucle 
console.log('recorrinedo el array de frutas:', frutas);
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
    
}
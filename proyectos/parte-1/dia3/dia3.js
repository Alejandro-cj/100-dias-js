// Operadores de comparación
let edad = 12;

if (edad >= 18) {
  console.log("Eres mayor de edad.");
} else {
  console.log("Eres menor de edad.");
}

// Operadores lógicos
let tieneCedula = true;
let tieneLicencia = false;

if (tieneCedula && tieneLicencia) {
  console.log("Puede conducir y votar.");
} else if (tieneCedula) {
  console.log("Puede votar, pero no conducir.");
} else {
  console.log("No puede conducir ni votar.");
}

// Estructura switch
let diaDeLaSemana = "Lunes";

switch (diaDeLaSemana) {
  case "Lunes":
    console.log("¡Es el comienzo de la semana!");
    break;
  case "Viernes":
    console.log("¡Ya es viernes!");
    break;
  default:
    console.log("Es otro día de la semana.");
}

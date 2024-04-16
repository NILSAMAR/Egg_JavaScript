// Actividad: Evaluación con estructura if

// ENTRADAS
// 6. En el archivo "index.js", programa la entrada de la edad utilizando la función prompt() y 
//guarda el dato en una variable (no olvides convertirlo a número con Number()). A modo de ejemplo:
const edad = Number(prompt("Ingrese su edad"));
// 7. Verifica si la edad ingresada es mayor a 18 y muestra un mensaje apropiado en caso afirmativo.
// if (edad > 18) {
//     alert("Es mayor de edad");
// }

// Actividad: Evaluación con estructura if
// if (edad > 18) {
//     alert("Es mayor de edad");
// } else {
//     alert("Es menor de edad");
// }


// Actividad: Evaluación de múltiples condiciones
if (edad > 18) {
	alert("Es mayor de edad");
} else if (edad > 0) {
	alert("Es menor de edad");
} else {
	alert("Edad incorrecta");
}

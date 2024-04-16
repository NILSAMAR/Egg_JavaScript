// Actividad: Determinando la longitud de una palabra/frase

// 4. En index.js, programa la entrada de una palabra o frase implementando prompt() y guarda el dato en una variable.A modo de ejemplo:
const frase = prompt("Ingrese una palabra o frase");
// 5. Define una nueva variable cantidad para definir la cantidad de caracteres de la variable frase. A modo de ejemplo:
const cantidad = frase.length;
// 6. Declara una nueva variable mensajeCantidad para “unir” el mensaje con cantidad.
const mensajeCantidad= "La cantidad es "+cantidad;
// 7. Programa una impresión en la consola que muestre el mensaje de la variable mensajeCantidad.
alert(mensajeCantidad);

//  Actividad: Cambio de minúsculas/mayúsculas

// 1. Luego de capturar la frase, define las variables fraseMinusculas y fraseMayusculas para hacer las 
// transformaciones con los métodos toLowerCase() y toUpperCase(). A modo de ejemplo:
const fraseMinusculas = frase.toLowerCase();
const fraseMayusculas = frase.toUpperCase();
// 2. Declara una nueva variable minMay para “unir” las variables fraseMinusculas y fraseMinusculas
const minMay = "La frase en minusculas  y Mayusculas es: "  +fraseMinusculas +" " +fraseMayusculas;
// 3. Programa una impresión en la consola que muestre el mensaje de la variable minMay.
alert(minMay);


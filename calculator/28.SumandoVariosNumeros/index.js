//  29. Actividad: Sumando varios números
//ENTRADA
//2. En el archivo "index.js", programa la entrada de la cantidad de números a sumar utilizando la función prompt() y 
//guarda el dato en una variable (no olvides convertirlo a número con Number()). Por ejemplo:
const cantidad = Number(prompt("¿Cuántos números desea sumar?"));
//OPERACIONES
//3. Declara la variable "sumatoria" para acumular los sumandos. Esta variable debe iniciarse en cero. Por ejemplo:
let sumatoria = 0;
//4. Define la estructura del bucle "for" para iterar desde 1 hasta la cantidad ingresada por el usuario, sumando de a uno.
//5. Dentro del bucle, programa la entrada del número a sumar utilizando la función prompt() y guarda el dato 
//en una variable (no olvides convertirlo a número con Number()).

for (let index = 1; index <= cantidad; index++) {
    const numeroAsumar = Number(prompt("Ingrese un número a sumar"));
    sumatoria = sumatoria + numeroAsumar;
}

//IMPRESION
//7. Programa una impresión en la consola que muestre el resultado de la sumatoria.
console.log(sumatoria);
alert(sumatoria);


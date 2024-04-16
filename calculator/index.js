// // Actividad: SUMANDO NUMEROS

// // ENTRADAS
// // 4. En index.js, programa la entrada del primer y segundo número a sumar implementando prompt() y guarda los datos en variables.
// const numero1 = Number(prompt("Ingrese primer número"));
// const numero2 = Number(prompt("Ingrese segundo número"));
// // OPERACIONES
// // 5. Define una nueva variable suma para sumar los números con el operador correspondiente. A modo de ejemplo:
// const suma = numero1 + numero2;
// // SALIDAS
// // 6. Luego de programar la operación, declara una nueva variable mensajeSuma para “unir” el mensaje con 
// // el resultado de la suma. A modo de ejemplo:
// const mensajeSuma = "El resultado de la suma es " + suma;
// // 7. Programa una alerta que muestre el mensaje de la variable mensajeSuma.
// //ALERTA
// alert(mensajeSuma);


// //  Actividad: REALIZANDO MAS OPERACIONES
// // OPERACIONES
// // 1. Después de calcular la suma, declara una nueva variable llamada "promedio" para encontrar el promedio de los números utilizando el operador correspondiente.
// // 2. Después de calcular el promedio, define otra variable llamada "triple" para triplicar el valor del promedio utilizando el operador correspondiente.
// // 3. Después de calcular el triple, crea una nueva variable llamada "resultadoMenosDiez" para restarle 10 unidades al valor triplicado utilizando el operador correspondiente.
// const promedio = suma / 2;
// const triple = promedio * 3;
// const resultadoMenosDiez = triple - 10;
// // SALIDAS
// // 5. Declara una nueva variable mensajeFinal para unir el mensaje con el resultado final de las operaciones.
// const mensajePromedio = "El promedio es " + promedio;
// const mensajeTriple = "El triple es " + triple;
// const mensajeFinal = "El resultado total es " + resultadoMenosDiez;
// // 6. Programa una alerta que muestre el mensaje de la variable mensajefinal.
// //ALERTA
// alert(mensajePromedio);
// alert(mensajeTriple);
// alert(mensajeFinal);





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


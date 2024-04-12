// Actividad: SUMANDO NUMEROS

// ENTRADAS
// 4. En index.js, programa la entrada del primer y segundo número a sumar implementando prompt() y guarda los datos en variables.
const numero1 = Number(prompt("Ingrese primer número"));
const numero2 = Number(prompt("Ingrese segundo número"));
// OPERACIONES
// 5. Define una nueva variable suma para sumar los números con el operador correspondiente. A modo de ejemplo:
const suma =numero1 +numero2;
// SALIDAS
// 6. Luego de programar la operación, declara una nueva variable mensajeSuma para “unir” el mensaje con 
// el resultado de la suma. A modo de ejemplo:
const mensajeSuma = "El resultado de la suma es "+suma;
// 7. Programa una alerta que muestre el mensaje de la variable mensajeSuma.
//ALERTA
alert(mensajeSuma);


//  Actividad: REALIZANDO MAS OPERACIONES
// OPERACIONES
// 1. Después de calcular la suma, declara una nueva variable llamada "promedio" para encontrar el promedio de los números utilizando el operador correspondiente.
// 2. Después de calcular el promedio, define otra variable llamada "triple" para triplicar el valor del promedio utilizando el operador correspondiente.
// 3. Después de calcular el triple, crea una nueva variable llamada "resultadoMenosDiez" para restarle 10 unidades al valor triplicado utilizando el operador correspondiente.
const promedio = suma / 2;
const triple = promedio * 3;
const resultadoMenosDiez = triple - 10;
// SALIDAS
// 5. Declara una nueva variable mensajeFinal para unir el mensaje con el resultado final de las operaciones.
const mensajePromedio= "El promedio es "+promedio;
const mensajeTriple= "El triple es "+triple;
const mensajeFinal= "El resultado total es "+resultadoMenosDiez;
// 6. Programa una alerta que muestre el mensaje de la variable mensajefinal.
//ALERTA
alert(mensajePromedio);
alert(mensajeTriple);
alert(mensajeFinal);







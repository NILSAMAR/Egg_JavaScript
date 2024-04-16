/* 30. Actividad: Función de cálculo de velocidad
OBJETIVO: En esta actividad, definirás una función que calcule la velocidad de un automóvil teniendo en cuenta la distancia 
recorrida y el tiempo que tarda en recorrerla. Sigue los siguientes pasos:
*/

//1. En index.js, escribe la sintaxis básica de una función común con las siguientes instrucciones:
//*Define una variable para la distancia
//*Define una variable para el tiempo
//*Define una variable para el cálculo de la velocidad (distancia * velocidad)
//*Imprime en la consola el resultado.

/*
//ENTRADA /OPERACION
function calcularVelocidad() {
    const distancia = 10
    const tiempo = 2
    const velocidad = distancia / tiempo;
    console.log("La velocidad del móvil es " + velocidad);
}
//EJECUTAR LA FUNCION
//1. Ejecuta la función tres veces. A modo de ejemplo:
calcularVelocidad();
calcularVelocidad();
calcularVelocidad();
//NOTA:Recuerda que para ejecutar una función hay que usar los paréntesis
//Abre con live server el archivo index.html y observa la consola del navegador (debería verse tres veces el mensaje programado).
* /

/* 30. Actividad: Función de velocidad dinámica
OBJETIVO: En esta actividad, mejorarás la función anterior para que reciba la distancia y el 
tiempo como parámetros, lo que la hará más reutilizable. Sigue los siguientes pasos:
*/
/*
//En el archivo "index.js", modifica la función para que tome como argumentos la distancia y el tiempo, y use estos parámetros 
//en lugar de las variables programadas. Por ejemplo:
//ENTRADA /OPERACION
function calcularVelocidad(distancia, tiempo) {
    // const distancia = 10
    // const tiempo = 2
    const velocidad = distancia / tiempo;
    console.log("La velocidad del móvil es " + velocidad);
}
//EJECUTAR LA FUNCION
//Ejecuta la función tres veces. A modo de ejemplo: 
calcularVelocidad(10, 2);
calcularVelocidad(100, 2);
calcularVelocidad(75, 3);

//Abre con live server el archivo index.html y observa la consola del navegador (debería verse tres veces el mensaje programado).
*/

/* 30.  Actividad: Retorno de velocidad
OBJETIVO:En esta actividad, mejorarás la función anterior para que devuelva la velocidad y así poder reutilizar este valor. Sigue estos pasos:
*/
const calcularVelocidad = (distancia, tiempo) => {
    const velocidad = distancia / tiempo;
    console.log("La velocidad del móvil es " + velocidad);
    return velocidad
}
//*Guarda los valores calculados en las variables velocidad1, velocidad2 y velocidad3.
//*Define tres mensajes con estos valores y luego imprímelos en la consola. Por ejemplo:
const velocidad1 = calcularVelocidad(10,2);
console.log("La velocidad de Juana es " + velocidad1);
//Abre con live server el archivo index.html y observa la consola del navegador (deberían verse los tres mensajes programados).
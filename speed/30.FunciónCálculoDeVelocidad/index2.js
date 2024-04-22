/* -------------------------------------------------------------------*/
/*30. Actividad: Función de velocidad dinámica*/
/* -------------------------------------------------------------------*/
/*OBJETIVO: En esta actividad, mejorarás la función anterior para que reciba la distancia y el 
tiempo como parámetros, lo que la hará más reutilizable. Sigue los siguientes pasos:
*/

/*1. En el archivo "index.js", modifica la función para que tome como argumentos la distancia y el tiempo, y use estos parámetros 
en lugar de las variables programadas. Por ejemplo:*/

//ENTRADA /OPERACION
function calcularVelocidad(distancia, tiempo) {
    // const distancia = 10
    // const tiempo = 2
    const velocidad = distancia / tiempo;
    console.log("La velocidad del móvil es " + velocidad);
}

/*2. Ejecuta la función tres veces. A modo de ejemplo: */

//EJECUTAR LA FUNCION
calcularVelocidad(10, 2);
calcularVelocidad(100, 2);
calcularVelocidad(75, 3);

//Abre con live server el archivo index.html y observa la consola del navegador (debería verse tres veces el mensaje programado).

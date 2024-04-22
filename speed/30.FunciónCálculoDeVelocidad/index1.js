/*--------------------------------------------------------------------*/
/*30. Actividad: FUNCION DE CALCULO DE VELOCIDAD*/
/*-------------------------------------------------------------------*/
/*OBJETIVO: En esta actividad, definirás una función que calcule la velocidad de un automóvil teniendo en cuenta la distancia 
recorrida y el tiempo que tarda en recorrerla. Sigue los siguientes pasos:
*/

//1. En index.js, escribe la sintaxis básica de una función común con las siguientes instrucciones:

//ENTRADA /OPERACION
function calcularVelocidad() {
    const distancia = 10//Define una variable para la distancia
    const tiempo = 2//Define una variable para el tiempo
    const velocidad = distancia / tiempo;//Define una variable para el cálculo de la velocidad (distancia * velocidad)
    console.log("La velocidad del móvil es " + velocidad);//Imprime en la consola el resultado.
}

//2. Ejecuta la función tres veces. A modo de ejemplo:

//EJECUTAR LA FUNCION
calcularVelocidad();
calcularVelocidad();
calcularVelocidad();


//NOTA:Recuerda que para ejecutar una función hay que usar los paréntesis
//3. Abre con live server el archivo index.html y observa la consola del navegador (debería verse tres veces el mensaje programado).

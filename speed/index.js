/*
30. Actividad: Función de cálculo de velocidad
OBJETIVO: En esta actividad, definirás una función que calcule la velocidad de un automóvil teniendo en cuenta la distancia 
recorrida y el tiempo que tarda en recorrerla. Sigue los siguientes pasos:
*/

//1. En index.js, escribe la sintaxis básica de una función común con las siguientes instrucciones:
//*Define una variable para la distancia
//*Define una variable para el tiempo
//*Define una variable para el cálculo de la velocidad (distancia * velocidad)
//*Imprime en la consola el resultado.

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


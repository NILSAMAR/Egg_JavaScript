/*---------------------------------------------------------------------*/
/*30.  Actividad: Retorno de velocidad*/
/*---------------------------------------------------------------------*/
/*OBJETIVO:En esta actividad, mejorarás la función anterior para que devuelva la velocidad y así poder reutilizar este valor. 
Sigue estos pasos:
*/

//OPERACION: FUNCION 
const calcularVelocidad = (distancia, tiempo) => {
    const velocidad = distancia / tiempo;
    console.log("La velocidad del móvil es " + velocidad);
    return velocidad
}
//GUARDA VALORES VINCULADOS A LA FUNCION
//*Guarda los valores calculados en las variables velocidad1, velocidad2 y velocidad3.
//*Define tres mensajes con estos valores y luego imprímelos en la consola. Por ejemplo:
const velocidad1 = calcularVelocidad(10, 2);
const velocidad2 = calcularVelocidad(20, 4);
const velocidad3 = calcularVelocidad(30, 6);

//MENSAJE EN CONSOLA
// Mostrar mensajes en la consola con las velocidades
console.log("La velocidad de Juana es " + velocidad1);
console.log("La velocidad 2 es " + velocidad2);
console.log("La velocidad 3 es " + velocidad3);
//Abre con live server el archivo index.html y observa la consola del navegador (deberían verse los tres mensajes programados).

//MOSTRAR ALERTA
// Mostrar alerta con la velocidad1
alert("La velocidad de Juana es: " + velocidad1);
alert("La velocidad 2 es: " + velocidad2);
alert("La velocidad 3 es: " + velocidad3);

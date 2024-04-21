/*-----------------------------------------------------------------------
31.2 Actividad: Conteo de caracteres */
/*-----------------------------------------------------------------------*/

/*1.4. Define una función lengthOf que:

Reciba como parámetro una cadena de texto
Retorne la longitud de la cadena (propiedad length)
Si recibe una cadena vacía, devuelva el mensaje "Invalid input".
*/

//OPERACION: FUNCION 

// Función que retorna la longitud de una cadena de texto
function lengthOf(str) {
    // Verifica si la cadena es vacía
    if (str === '') {
        return "Invalid input";
    }
    // Retorna la longitud de la cadena
    return str.length;
}

/*Asegúrate de ejecutar la función y mostrar en la consola los resultados al menos tres veces */
// Ejemplos de uso
console.log("Longitud de de 'Hello, world' es:",lengthOf("Hello, world!")); // Retorna 13
console.log("Longitud de 'JavaScript' es ",lengthOf ("JavaScript"));   // Retorna 10
console.log("Longitud de '' es:" ,lengthOf(""));             // Retorna "Invalid input"

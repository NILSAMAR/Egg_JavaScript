/*-----------------------------------------------------------------------
31.2 Actividad: Incluir */
/*-----------------------------------------------------------------------*/

/*Define una función stringIncludes que:

-Reciba como parámetro dos cadenas de texto
-Verifique el la primer cadena está incluida en la segunda
-Si la incluye, devolver true
-Si no, devolver false

*/
function stringIncludes(substring, mainString) {
    // Comprueba si 'substring' está contenido en 'mainString'
    return mainString.includes(substring);
}

// Ejemplos de uso:
console.log(stringIncludes("casa", "Mi casa es tu casa")); // Devuelve true
console.log(stringIncludes("perro", "Me gustan los gatos")); // Devuelve false
//NOTA:En este código, usamos el método includes para verificar si una cadena 
//contiene otra. El método devuelve true si la subcadena está contenida en la 
//cadena principal y false si no lo está. Puedes probar la función con diferentes
//entradas para asegurarte de que funcione como esperas.


/*5. Ejecuta la función y muestra en consola los resultados al menos tres veces.*/
console.log(stringIncludes("'he'", "'Hello'"));//debe imprimir false mientras que 
console.log(stringIncludes("'he'", "'hello world'"));// debe imprimir true.


/*6. Abre con live server el archivo index.html y verifica las salidas programadas.*/


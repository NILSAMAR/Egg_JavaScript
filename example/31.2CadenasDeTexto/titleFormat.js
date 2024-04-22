/*-----------------------------------------------------------------------
31.2 Actividad: Conteo de caracteres */
/*-----------------------------------------------------------------------*/

/*4.Define una función titleFormat que:
-Reciba como parámetro una cadena de texto
-Corte la cadena en: primera letra y resto del título (método charAt y slice)
-La primera letra la convierta en mayúsculas (método toUpperCase)
-El resto en minúsculas  (método toLowerCase)
-Concatene ambas partes (con +)
-Retorne la longitud de la cadena
*/
function titleFormat(text) {
    // Verificar que el texto no esté vacío para evitar errores
    if (text.length === 0) {
        return 0;
    }
    // Extraer la primera letra y el resto del título
    let primeraLetra = text.charAt(0).toUpperCase(); // Convertir la primera letra a mayúscula
    let restoDelTitulo = text.slice(1).toLowerCase(); // Convertir el resto a minúsculas
    // Concatenar ambas partes para obtener el título formateado
    let formattedTitle = primeraLetra + restoDelTitulo;
    // Retornar la longitud de la cadena formateada
    return formattedTitle.length;
}

// Ejemplo de uso
let text = "hELLo World";
let length = titleFormat(text); // El título formateado será "Hello world", la longitud es 11
console.log("Longitud del título formateado:", length);


/*5. Ejecuta la función y muestra en consola los resultados al menos tres veces.*/
console.log('La longitud total de "hello world":',titleFormat('hello world')); 
console.log('La longitud total de "HELLO world":',titleFormat('HELLO world'));
console.log('La longitud total de "HellO WOrLd" :',titleFormat('HellO WOrLd'));//deben imprimir “Hello world

/*6. Abre con live server el archivo index.html y verifica las salidas programadas.*/
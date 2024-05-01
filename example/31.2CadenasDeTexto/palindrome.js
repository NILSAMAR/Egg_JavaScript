/*-----------------------------------------------------------------------
31.3 Actividad: Cantidad de caracteres */
/*-----------------------------------------------------------------------*/
/*Define una función palindrome que:
-Reciba como parámetro una cadena de texto
-Rebane la cadena (método split)
-Invierta la lista “spliteada” (método reverse)
-Una la lista (método join)
-Si la cadena de entrada es igual a la cadena de salida, devolver true
-Si no, devolver false
*/

function palindrome(str) {
    // Convierte la cadena en un array de caracteres utilizando split('')
    const arrayCaracteres = str.split('');
    // Invierte el orden de los caracteres utilizando reverse()
    const arrayReverso = arrayCaracteres.reverse();
    // Une los caracteres invertidos en una nueva cadena utilizando join('')
    const cadenaReversa = arrayReverso.join('');
    return cadenaReversa;
}

const original = "Hola, ¿cómo estás?";
const invertida = palindrome(original);
console.log("Original:", original);
console.log("Invertida:", invertida);
//Output
//Original: Hola, ¿cómo estás?
//Invertida: ?sátse moc¿ ,aloH


/* Abre con live server el archivo index.html y verificar las salidas programadas.*/



const cadena = "hola como estas?";

/**charat */

//Este método devuelve el carácter en la posición especificada dentro de una cadena.
//La posición se basa en un índice, que comienza desde cero. 
//Por ejemplo, el primer carácter de una cadena tiene el índice 0, el segundo tiene el índice 1, y así sucesivamente.
console.log("CHARAT: " + cadena.charAt(1)); 
//Esto muestra el carácter en el índice 1 de la variable cadena. El resultado será el segundo carácter de la cadena.
console.log("CHARAT: " + cadena.charAt(2));
console.log("CHARAT: " + cadena.charAt(3));
console.log("CHARAT: " + cadena.charAt(cadena.lenght - 1));

/**slice */

//El método slice() en JavaScript se usa para extraer una parte de una cadena (o un array) sin modificar la cadena original. 
//Aquí te doy una explicación detallada del código que compartiste, que utiliza slice() para extraer secciones específicas de una cadena de texto:
console.log("SLICE: " + cadena.slice(0 , 4));
console.log("SLICE: " + cadena.slice(6, 10));
console.log("SLICE: " + cadena.slice(8, cadena.lenght));


/**split */

//El método split() en JavaScript se usa para dividir una cadena en un array, basándose en un separador específico. Aquí te doy 
//una explicación detallada del código que compartiste, que utiliza split() para dividir una cadena de diferentes maneras:

console.log("SPLIT: " + cadena.split("o"));
console.log("SPLIT: " + cadena.split(" "));//separa por palabra
console.log(cadena.split(" "));//separa por palabra
console.log("SPLIT: " + cadena.split(" "));//separa por caracteres
console.log(cadena.split(""));//separa por caracteres
console.log(typeof cadena.split(" "));

/**reverse */

//reverse() invierte el orden de un array. El primer elemento se convierte en el último y viceversa.
//Modifica el array original y devuelve una referencia al mismo array, pero invertido.
console.log("REVERSE.: "+cadena.split(" ").cadena.reverse());
console.log("REVERSE.: "+cadena.split(" ").cadena.reverse());

const arreglo = ["hola","como","estas","mi","amigo"];
console.log(arreglo);

/**unshift */
arreglo.unshift("¿¿¿")

/**push */
arreglo.push("???")

console.log(arreglo);
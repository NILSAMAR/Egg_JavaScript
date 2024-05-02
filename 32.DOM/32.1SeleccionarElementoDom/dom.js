// Selecciona un elemento por su ID
const h1Selector = document.getElementById("titulo");
// Este código obtiene el elemento HTML con el ID "titulo". 
// Generalmente, este ID debería ser único en todo el documento.

// Imprimir información del elemento seleccionado por ID
console.log(h1Selector); 
// Muestra el elemento seleccionado en la consola para confirmar que se obtuvo correctamente.

console.log(h1Selector.id); 
// Imprime el ID del elemento. En este caso, debería ser "titulo".

console.log(h1Selector.className); 
// Muestra las clases CSS del elemento, útil para verificar qué estilos están aplicados o si hay múltiples clases asociadas.


// Selecciona elementos por su clase CSS
const classSelector = document.getElementsByClassName("span-class");
// Aquí se obtiene una colección de todos los elementos que tienen la clase "span-class".

// Imprimir información de la colección de elementos seleccionados por clase
console.log(classSelector); 
// Muestra todos los elementos que tienen la clase "span-class" para verificar que se seleccionaron correctamente.
// Selecciona elementos por su etiqueta HTML
const tagSelector = document.getElementsByTagName("p");
// Se obtiene una colección de todos los elementos que tienen la etiqueta <p> (párrafo).

// Imprimir información de la colección de elementos seleccionados por etiqueta
console.log(tagSelector); 
// Muestra todos los elementos que son párrafos en el documento. Esto puede ser útil para verificar la estructura del contenido.


// Uso de querySelector para seleccionar elementos con sintaxis similar a CSS
const selector1 = document.querySelector("h1");
// Obtiene el primer elemento que coincide con la etiqueta <h1>.

const selector2 = document.querySelector(".span-class");
// Obtiene el primer elemento que tiene la clase "span-class".

const selector3 = document.querySelector("#titulo");
// Obtiene el primer elemento que tiene el ID "titulo".

// El método querySelector permite seleccionar elementos con una sintaxis flexible, similar a los selectores CSS.
// Puedes seleccionar por etiqueta, clase o ID, pero solo obtiene el primer elemento que coincide.

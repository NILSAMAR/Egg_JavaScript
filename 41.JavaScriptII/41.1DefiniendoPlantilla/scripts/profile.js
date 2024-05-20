/*-----------------------------------------------------------------------
41.1. ✏️ Actividad: Definiendo una plantilla
/*-----------------------------------------------------------------------*/
/*🍁Para completar esta actividad, sigue las instrucciones a continuación:

💧1.En la carpeta donde almacenas tus proyectos del curso, crea una nueva carpeta llamada profile.
💧2.Abre la carpeta recién creada en Visual Studio Code.
💧3.Define la estructura básica del archivo index.html y vincúlalo con profile.js.
💧4.Define cinco variables que contengan datos personales. (como nombre, edad, profesión, ubicación, hobby)
💧5.Genera un template string para redactar un texto, integrando las variables definidas previamente.
💧6.Imprime el template en la vista principal de la página.
💧7.Verifica que la impresión del template en la vista sea correcta.

💡Un template string es una característica en JavaScript que facilita la creación de cadenas de texto que 
incluyen expresiones embebidas. Se reconocen por el uso de backticks (`) en lugar de las comillas simples o 
dobles que se usan tradicionalmente para las cadenas de texto. Dentro de un template string, puedes insertar 
variables y expresiones directamente, lo que lo hace muy útil para construir cadenas de forma más dinámica y 
legible.

Mira un ejemplo:
const nombre = "Ana";
console.log(`¡Hola, ${nombre}!`); // Salida: ¡Hola, Ana!
 */

//🍁Define cinco variables con datos personales como nombre, edad, profesión, ubicación y hobby. Un ejemplo de estas variables es:
const nombre = "Nilsa";
const edad = 25;
const profesion = "Ingeniero Mecanico";
const ubicacion = "Lima";
const hobby = "Bailar";

//🍁Usa las variables definidas para crear un template string. Esto puede ser algo así:
const profileText = `Mi nombre es ${nombre}, tengo ${edad} años y soy ${profesion}. Vivo en ${ubicacion} y en mi tiempo libre disfruto de ${hobby}.`;

//Para mostrar el texto en la página, puedes usar JavaScript para encontrar el 
//elemento correcto en el DOM y asignar el texto del template a ese elemento:

document.getElementById("profile-description").innerText = profileText;







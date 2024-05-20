/*-----------------------------------------------------------------------
41.1. ✏️ Actividad: Definiendo una plantilla
/*-----------------------------------------------------------------------*/
/*Para completar esta actividad, sigue las instrucciones a continuación:

💧1.En la carpeta donde almacenas tus proyectos del curso, crea una nueva carpeta llamada profile.
💧2.Abre la carpeta recién creada en Visual Studio Code.
💧3.Define la estructura básica del archivo index.html y vincúlalo con profile.js.
💧4.Define cinco variables que contengan datos personales. (como nombre, edad, profesión, ubicación, hobby)
💧5.Genera un template string para redactar un texto, integrando las variables definidas previamente.
💧6.Imprime el template en la vista principal de la página.
💧7.Verifica que la impresión del template en la vista sea correcta.*/

//💧4.Define cinco variables que contengan datos personales. (como nombre, edad, profesión, ubicación, hobby)
const nombre = "Nilsa";
const edad = 25;
const profesion = "Ingeniera Mecánica";
const ubicacion = "Lima";
const hobby = "Bailar";

//💧5. Genera un template string para redactar un texto, integrando las variables definidas previamente.
const profileText = `Mi nombre es ${nombre}, tengo ${edad} años y soy ${profesion}. Vivo en ${ubicacion} y en mi tiempo libre disfruto de ${hobby}.`;

//💧6. Imprime el template en la vista principal de la página.
    document.getElementById("profile-description").innerText = profileText;











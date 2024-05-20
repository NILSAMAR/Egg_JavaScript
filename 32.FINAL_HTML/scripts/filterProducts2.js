// Función para capturar el texto del evento de teclado
function captureText(event) { // Ahora la función recibe un parámetro 'event'
    console.log("Tecla presionada:", event.key); // Muestra la tecla presionada
    console.log("Código de tecla:", event.keyCode); // Muestra el código de tecla
    console.log("Tiempo de evento:", event.timeStamp); // Muestra el tiempo del evento
    console.log("Objeto completo del evento:", event); // Muestra el objeto completo para referencia
}

/*-----------------------------------------------------------------------
33. ✏️ Actividad: Investigación del evento de teclado
/*-----------------------------------------------------------------------*/
/*OBJETIVO:En esta actividad vamos a crear una función que “encapsule” todo 
lo desarrollado en la actividad anterior. 
Para este ejercicio vas a seguir los siguientes pasos:
*/
/*PASOS*/
/*
💧Para este ejercicio tienes que seguir los siguientes pasos:
💧Desde Visual Studio Code, abre la carpeta store y luego el archivo filterProducts.js
💧Modifica el escuchador de eventos, de manera que ahora, la función depende de un objeto 
con todos los datos del evento. A modo de ejemplo:*/

// Selecciona el input con el ID "search"
const searchSelector = document.querySelector("#search");

// Modificar el escuchador para usar una función de flecha que pase el evento a captureText
searchSelector.addEventListener("keyup", event => captureText(event));
/*
💧Modifica la función captureText para que reciba el evento como parámetro e imprime 
por consola algunas propiedades importantes. 
💧Abre con live server el archivo index.html y observa la correcta impresión por 
consola de cada tecla presionada. A modo de ejemplo: */





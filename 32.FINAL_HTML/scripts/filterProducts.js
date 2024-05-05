/*-----------------------------------------------------------------------
33. Actividad: Asignar evento de teclado en línea*/
/*-----------------------------------------------------------------------*/
/*OBJETIVO:En esta actividad, sólo te enfocarás en asignar un evento de teclado en línea al 
input de tipo texto de la barra de navegación. 
Para este ejercicio tienes que seguir los siguientes pasos:
*/
/*PASOS*/
/*
💧1. Desde Visual Studio Code, abre la carpeta store
💧2. Crea el archivo filterProducts.js en la carpeta scripts y conectalo con la vista principal. 
💡 Prestar atención al orden de los scripts.
💧3. Define la función captureText para que imprima por consola “capturado”. 
💧4. Identifica el input de búsqueda de index.html
💧5. Agrega el atributo onkeyup para asignar un evento de tipo keyup. Cada vez que el usuario 
presione una tecla del teclado, deberá ejecutar la función captureText. A modo de ejemplo:
<input type="text" placeholder="Search" onkeyup="captureText()" />
💧6. Abre con live server el archivo index.html y observa la correcta impresión por consola de cada tecla presionada.
*/
function captureText() {//FUNCION CAPTURETEXT
    console.log("capturado");//IMPRIME CONSOLA CAPTURADO
}
//!comentar
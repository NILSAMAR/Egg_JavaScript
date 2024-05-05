
function captureText() {//FUNCION CAPTURETEXT
    console.log("capturado");//IMPRIME CONSOLA CAPTURADO
}

/*-----------------------------------------------------------------------
33. Actividad: asignación de evento de teclado con event listener
/*-----------------------------------------------------------------------*/
/*OBJETIVO:En esta actividad, sólo te enfocarás en modificar el evento de 
teclado del input de tipo texto de la barra de navegación de manera que 
funcione con un escuchador de eventos. Para este ejercicio tienes que 
seguir los siguientes pasos:
*/
/*PASOS*/
/*
💧Desde Visual Studio Code, abre la carpeta store y luego el archivo index.html
💧Quita el atributo onkeyup del input de tipo texto ya que implementarás otra 
forma: el escuchador de eventos y agrega el atributo id=”search”. 
💧Abre el archivo filterProducts.js y define una variable searchSelector, para 
seleccionar con el método querySelector el input de tipo texto de la vista principal. */

// Selecciona el input con el ID "search"
const searchSelector = document.querySelector("#search");
/*
💧El selector debe escuchar un evento con el método addEventListener. El evento debe 
ser de tipo keyup para que cada tecla presionada ejecute la función captureText. A modo de ejemplo:
searchSelector.addEventListener("keyup", captureText);*/

searchSelector.addEventListener("keyup", captureText);


/*
💧Abre con live server el archivo index.html y observa la correcta impresión por consola 
de cada tecla presionada..

NOTAS
Pruebas con Live Server
Inicia Live Server para probar:
Después de hacer estos cambios, inicia Live Server en tu archivo index.html. 
Luego, abre la consola del navegador y comienza a escribir en el input de texto 
para verificar si el evento keyup está siendo capturado.
Observa el resultado en la consola:
Mientras escribes en el input, deberías ver en la consola los mensajes que 
indican qué tecla se presionó. 
Esto confirma que el escuchador de eventos está funcionando correctamente.*/
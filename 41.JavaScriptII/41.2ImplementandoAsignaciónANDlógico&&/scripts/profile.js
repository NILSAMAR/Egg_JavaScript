//*-----------------------------------------------------------------------
//*41.2. ✏️ Actividad: Implementando la Asignación con AND lógico (&&)
//*-----------------------------------------------------------------------*/
/*PASOS:
//?💧1.Abre el archivo profile.js en Visual Studio Code.
//?💧2.Define una variable isOnline y asigna un valor inicial de false. 
//?📌Esto representará si el usuario está conectado o no inicialmente.
//?💧3.Utiliza la función prompt() para preguntar al usuario si está conectado. 
//?📌La pregunta debe ser clara y especificar que las respuestas posibles son "SI" o "NO".
//?💧4.Implementa una condición que verifique la respuesta del usuario. 
//?📌Convierte la respuesta a mayúsculas para evitar problemas de mayúsculas y minúsculas. 
//?📌Si la respuesta es "SI" y (&&) isOnline es false, cambia el valor de isOnline a true.
//?💧5.Dependiendo del estado de isOnline, muestra un mensaje diferente en la consola. 
//?📌Si isOnline es true, muestra un mensaje indicando que el usuario está conectado y se mostrará el "template". 
//?📌Si es false, indica que el usuario no está conectado y el "template" será ocultado.
//?📌Completa los pasos anteriores y ejecuta tu script en el navegador. 
//?📌Observa cómo cambian los mensajes en la consola según las diferentes respuestas que ingreses en el prompt.
*/


//?💧2.Define una variable isOnline y asigna un valor inicial de false.
//?💧3.Utiliza la función prompt() para preguntar al usuario si está conectado. 

let isOnline = false; //Varible isOnline, valor inicial False
const respuesta = prompt("¿Estás conectado? Responde 'SI' o 'NO'");//Funcion prompt
const respuestaMayuscula = respuesta.toUpperCase();//se comvierte la respuesta en mayuscula

//?💧4.Implementa una condición que verifique la respuesta del usuario. 

if (respuestaMayuscula === "SI" && !isOnline) {//condicional , si la respuesta es :SI & isOnline=false
    isOnline = true;
}

//?💧5.Dependiendo del estado de isOnline, muestra un mensaje diferente en la consola. 

if (isOnline) {
    console.log("El usuario está conectado. Mostrando el perfil...");
    // Aquí puedes colocar el código para mostrar el template o hacer otras acciones.
    const nombre = "Nilsa";
    const edad = 25;
    const profesion = "Ingeniero Mecanico";
    const ubicacion = "Lima";
    const hobby = "Bailar";

    const profileText = `Mi nombre es ${nombre}, tengo ${edad} años y soy ${profesion}. Vivo en ${ubicacion} y en mi tiempo libre disfruto de ${hobby}.`;
    document.getElementById("profile-description").innerText = profileText;
} else {
    console.log("El usuario no está conectado. Ocultando el perfil...");
    // Aquí puedes agregar el código para ocultar el template o hacer otras acciones.
    document.getElementById("profile-description").innerText = "El perfil no está disponible.";
}


function imprimirTemplate(id) {
    // Datos personales
    const nombre = "Ana";
    const edad = 25;
    const profesion = "Desarrolladora Web";
    const ubicacion = "Buenos Aires";
    const hobby = "Bailar tango";

    // Template string para los datos personales
    const templateString = `Mi nombre es ${nombre}, tengo ${edad} años y soy ${profesion}. Vivo en ${ubicacion} y disfruto de ${hobby}.`;

    // Establecer por defecto el id a "pre3" si no se proporciona
    const idDefault = id || "pre3";

    // Obtener el elemento correspondiente
    const preElement = document.getElementById(idDefault);

    // Asignar el template string al innerText del elemento
    if (preElement) {
        preElement.innerText = templateString;
    } else {
        console.error(`No se encontró el elemento con id: ${idDefault}`);
    }
}






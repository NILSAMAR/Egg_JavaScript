/*-----------------------------------------------------------------------
33. ✏️ Actividad: Filtrar producto
/*-----------------------------------------------------------------------*/
/*OBJETIVO:En esta actividad, modificarás la función captureText para renderizar 
los productos resultantes del filtro de tipo texto. Para este ejercicio tienes que 
seguir los siguientes pasos:
*/
/*PASOS*/
/*
💧1. Desde Visual Studio Code, abre la carpeta store y luego el archivo filterProducts.js
💧2.Modifica la función captureText para que:
-guarde en una variable el valor capturado por el evento*/
const captureText = (event) => {
    //guardar en una variable el valor capturado por el evento
    let text = event.target.value;
    /*

    -filtre el array con todos los productos con los productos cuyo nombre incluya el texto capturado*/

    //filtre el array con todos los productos con los productos cuyo nombre incluya el texto capturado
    let filteredProducts = products.filter(product => product.title.toLowerCase().includes(text.toLowerCase()));

    /*
    -actualice la vista con una nueva impresión de las tarjetas*/
    //actualice la vista con una nueva impresión de las tarjetas
    printCards(filteredProducts, "products");
}


/*
💧3.Abre con live server el archivo index.html y observa la correcta impresión por consola de cada 
tecla presionada.
💧4.Modifica las propiedades, atributos, variables y funciones que consideres necesarias para que 
el filtro funcione correctamente.*/


// definir una variable searchSelector
let searchSelector = document.querySelector("#search");
//Agregar evento
searchSelector.addEventListener("keyup", event=>captureText(event));



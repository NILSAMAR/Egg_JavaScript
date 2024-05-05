/*-----------------------------------------------------------------------
34.2  ✏️ Actividad: Capturar el id del producto */
/*-----------------------------------------------------------------------*/
/*OBJETIVO:En esta actividad, vas a mejorar la vista principal del proyecto de 
la tienda del HTML-CSS para renderizar el pie de página con métodos del DOM. 
Para este ejercicio tienes que seguir los siguientes pasos:✅ */

/**
💧1.Desde Visual Studio Code, abre la carpeta store y luego el archivo details.html. ✅
💧2.Quita el input de búsqueda de la barra de navegación.✅
💧3.Conecta el script layout.js y modifica la barra de navegación y el pie de página para que se generen dinámicamente. ✅
💧4.Conecta el script products.js para tener el array de productos disponible para la vista.✅
💧5.Crea el archivo productDetail.js en la carpeta scripts y conectalo con la vista product.html✅
💧6.Captura el parámetro id utilizando las propiedades y métodos de la teoría.✅
💧7.Imprime por consola el id. A modo de ejemplo: ✅*/

const query = location.search;
const params = new URLSearchParams(query);
const id = params.get('id');
console.log(id);

/*
💧8.Abre con live server el archivo index.html, prueba el correcto direccionamiento de los links y 
verifica la impresión por consola del id. */
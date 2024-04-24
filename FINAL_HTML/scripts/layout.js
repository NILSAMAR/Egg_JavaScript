const navSelector = document.getElementById("nav"); // Aquí definimos navSelector

const options = [
    { title: "Ofertas de la semana", linkTo: "./outlet.html" },
    { title: "Como", linkTo: "./how.html" },
    { title: "Taxs", linkTo: "./taxs.html" },
    { title: "Orders", linkTo: "./orders.html" },
    { title: "Warranty", linkTo: "./warranty.html" },
];

/**
 * Itera con for-of, de manera que cada iteración:
 * - Crea las etiquetas correspondientes con el método createElement y las propiedades/estilos 
 * correspondientes.
 * - Asigna el texto de la propiedad title de cada objeto con la propiedad textContent
 * - Define la propiedad href hacia la propiedad linkTo de cada objeto.
 * - Luego “agregar un hijo” al navSelector.
 */
for (let option of options) {
    const anchor = document.createElement("a"); // Creación del elemento "a"
    anchor.className = "nav-button"; // Agregar clase para estilo
    anchor.textContent = option.title; // Asignar el texto del título
    anchor.href = option.linkTo; // Asignar el vínculo
    navSelector.appendChild(anchor); // Uso de la variable correcta
}


//PIE DE PAGINA

var miFooter = document.getElementById('footer_pie');
// Modificamos el atributo "id" para cambiar su valor
miFooter.setAttribute('id', 'footer');

/**Desde Visual Studio Code, abre la carpeta store
Analiza el código del archivo index.html e identifica la etiqueta que es “padre” de las columnas del pie de página.
Asigna a esa etiqueta un id=”footer” para usar como selector de JavaScript. 
Abre el archivo layout.js y define una variable footerSelector, para seleccionar con el 
método getElementById la etiqueta correspondiente donde se renderizará el pie de página.
 */

const footerSelector = document.querySelector("#footer");

/**Modifica la variable options, para agregar a cada objeto la propiedad opts 
 * (con las diferentes opciones de cada columna). Se definieron algunas propiedades 
 * para que usen como ejemplo: */

const options_Footer = [
    { title:"Descuentos" , options: ["Laptops", "Audio", "Auticulares"] },
    { title:"Descuentos" , options: ["Formas de pago", "", ""] },
    { title:"Descuentos" , options: ["Impuestos", ""] },
    { title:"Descuentos" , options: ["", ""] },
    { title:"Descuentos" , options: []},
];

/**Itera con for of, de manera que cada iteración:

-Crea las etiquetas correspondientes con el método createElement y las 
propiedades/estilos correspondientes.
-Cada titulo debe linkear hacia la propiedad definida en linkTo,
-Las opciones de cada columna se deben mapear con otro for of.
-Luego “agregar los hijos” correspondientes al footerSelector

Abre con live server el archivo index.html y observa la barra de navegación. 
Programa y verifica la vista la cantidad de veces que sea necesario para que la barra de navegación se renderice y funcione correctamente.
 */

for (let option of options_footer) {
    const anchor_footer = document.createElement("a"); // Creación del elemento "a"
    anchor_footer.className = "footer-button"; // Agregar clase para estilo
    anchor_footer.textContent = option.title; // Asignar el texto del título
    anchor_footer.href = option.linkTo; // Asignar el vínculo
    footerSelector.appendChild(anchor_footer); // Uso de la variable correcta
}
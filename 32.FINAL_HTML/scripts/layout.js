//Obtenemos el elemento div mediante su ID
var miDiv = document.getElementById('navbar');
// Modificamos el atributo "id" para cambiar su valor
miDiv.setAttribute('id', 'nav');

/*-----------------------------------------------------------------------
32.1 Actividad: Renderizando la barra de navegación del store */
/*-----------------------------------------------------------------------*/
/*OBJETIVO:En esta actividad, vas a mejorar la vista principal del proyecto de la tienda del HTML-CSS 
para renderizar el pie de página con métodos del DOM. Para este ejercicio tienes que seguir los 
siguientes pasos:✅ */

/*PASOS*/
/*
💧1. Analiza el código del archivo index.html e identifica la etiqueta que es “padre” de las opciones de navegación.
💧2. Asigna a esa etiqueta un id=”nav” para usar como selector de JavaScript. 
💧3. Crea el archivo layout.js en la carpeta scripts y conectalo con la vista principal.
💧4. Abre el archivo layout.js y define una variable navSelector, para seleccionar con el método getElementById la 
etiqueta correspondiente donde se renderizará la barra de navegación.*/

const navSelector = document.getElementById("nav"); // Aquí definimos variable navSelector


/*
💧5. Crea una variable options, para guardar un array de objetos. Cada objeto representará los datos de un 
botón con las propiedades:
- text: para el texto del botón
- linkTo: para el link de direccionamiento
Se definieron algunas propiedades para que usen como ejemplo: */

//creando una variable options y la modificamos para el footer
const options = [ //! guardar un array de objetos
    { title: "Ofertas de la semana", linkTo: "./outlet.html" },
    { title: "Como Comprar", linkTo: "./how.html" },
    { title: "Taxis", linkTo: "./taxs.html" },
    { title: "Pedidos", linkTo: "./orders.html" },
    { title: "Garantia", linkTo: "./warranty.html" },
];

/*
💧6. Itera con for-of, de manera que cada iteración:
- Crea las etiquetas correspondientes con el método createElement y las propiedades/estilos correspondientes.
- Asigna el texto de la propiedad title de cada objeto con la propiedad textContent
- Define la propiedad href hacia la propiedad linkTo de cada objeto.
- Luego “agregar un hijo” al navSelector.*/
for (let option of options) {
    const anchor = document.createElement("a"); // Creación del elemento "a"
    anchor.className = "nav-a"; // Agregar clase para estilo
    anchor.textContent = option.title; // Asignar el texto del título
    anchor.href = option.linkTo; // Asignar el vínculo
    navSelector.appendChild(anchor); // Uso de la variable correcta
}
/*
💧7. Abre con live server el archivo index.html y observa la barra de navegación.
💧8. Programa y verifica la vista la cantidad de veces que sea necesario para que 
💧la barra de navegación se renderice y funcione correctamente. */


/*-----------------------------------------------------------------------
32.2  Actividad: Renderizando de Pie de Pagina */
/*-----------------------------------------------------------------------*/
/*OBJETIVO:En esta actividad, vas a mejorar la vista principal del proyecto de 
la tienda del HTML-CSS para renderizar el pie de página con métodos del DOM. 
Para este ejercicio tienes que seguir los siguientes pasos:✅ */

/**
💧1. Desde Visual Studio Code, abre la carpeta store
💧2. Analiza el código del archivo index.html e identifica la etiqueta que es “padre” de las columnas del pie de página.
💧3. Asigna a esa etiqueta un id=”footer” para usar como selector de JavaScript. */

//Obtenemos el elemento div mediante su ID
var miFooter = document.getElementById('footer_pie');
// Modificamos el atributo "id" para cambiar su valor
miFooter.setAttribute('id', 'footer');

/*
💧4. Abre el archivo layout.js y define una variable footerSelector, para seleccionar con el método getElementById la 
etiqueta correspondiente donde se renderizará el pie de página.*/
//const footerSelector = document.querySelector("#footer");
const footerSelector = document.getElementById("footer");

/*
💧5. Modifica la variable options, para agregar a cada objeto la propiedad opts (con las diferentes opciones de 
cada columna). Se definieron algunas propiedades para que usen como ejemplo: */

const options_Footer = [
    { title: "Productos", opts: ["Laptops", "Audio", "Auriculares"], linkTo: "./products.html" },
    { title: "Pagos", opts: ["Formas de pago", "PayPal", "Costos y Tarifas"], linkTo: "./pagos.html" },
    { title: "Facturación", opts: ["Impuestos", "Garantías"], linkTo: "./facturacion.html" },
    { title: "Envíos", opts: ["Pedir Nuevamente", "Más envíos"], linkTo: "./envios.html" },
    { title: "Redes", opts: ["Facebook", "Gmail"], linkTo: "./redes.html" },
    { title: "Contactos", opts: ["Teléfono", "Clientes"], linkTo: "./contactos.html" },
];

/**
-Itera con for of, de manera que cada iteración:
-Crea las etiquetas correspondientes con el método createElement y las  propiedades/estilos correspondientes.
-Cada titulo debe linkear hacia la propiedad definida en linkTo,
-Las opciones de cada columna se deben mapear con otro for of.
-Luego “agregar los hijos” correspondientes al footerSelector

6. Abre con live server el archivo index.html y observa la barra de navegación. 
7. Programa y verifica la vista la cantidad de veces que sea necesario para que la barra de navegación se 
renderice y funcione correctamente.
 */

for (let option_Footer of options_Footer) {
    let ul = document.createElement("ul");
    ul.className = "footer-ul";

    let main_li = document.createElement("li");
    main_li.className = "footer-main-item";

    let a = document.createElement("a");
    a.className = "footer-a";
    a.textContent = option_Footer.title;
    a.href = option_Footer.linkTo;

    main_li.appendChild(a);
    ul.appendChild(main_li);

    for (let opt of option_Footer.opts) {
        let li = document.createElement("li");
        li.className = "footer-li";

        let a = document.createElement("a");
        a.className = "footer-a";
        a.textContent = opt;

        li.appendChild(a);
        ul.appendChild(li);
    }

    footerSelector.appendChild(ul);
}
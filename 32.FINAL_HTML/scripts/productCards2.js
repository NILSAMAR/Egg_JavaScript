// Selector para el contenedor de productos
const productsSelector = document.getElementById("products");

// Función para crear una tarjeta de producto
function createCard(product) {
    return `
      <a class="product-card" href="./details.html?id=${product.id}">
        <img class="product-img" src="${product.images[0]}" alt="${product.title}" />
        <div class="product-info">
          <span class="product-title">${product.title}</span>
          <span class="product-description">${product.description}</span>
          <div class="product-price-block">
            <span class="product-price">$${product.price}</span>
            <span class="product-discount">${product.discount}% Off</span>
          </div>
          <div class="product-tax-policy">
            Incluye impuesto País y percepción AFIP
          </div>
        </div>
      </a>
    `;
}

// Inicializa la plantilla de productos como cadena vacía
let productsTemplate = "";

// Itera sobre los productos y agrega las tarjetas a la plantilla
for (const product of products) {
    productsTemplate += createCard(product); // Concatenar con "+=" para agregar a la plantilla
}

// Inserta las tarjetas de productos en el selector correspondiente
productsSelector.innerHTML = productsTemplate;

// Ahora puedes abrir el archivo index.html con Live Server y observar si las tarjetas se renderizan y se muestran correctamente.


/*-----------------------------------------------------------------------
32.3.3  Actividad: Función de renderizado*/
/*-----------------------------------------------------------------------*/
/*OBJETIVO:En esta actividad vamos a crear una función que //!“encapsule” 
todo lo desarrollado en la actividad anterior. Para este ejercicio vas 
a seguir los siguientes pasos:*/
/*
💧Desde Visual Studio Code, abre la carpeta store
💧Abre productCards.html y define una función printCards que reciba como parámetro un array de 
productos arrayOfProducts y el id del selector HTML idSelector y que realice las siguientes instrucciones:*/
/*
💧Define una variable productsTemplate para concatenar todas las tarjetas de productos
💧Itera con for of para que cada vuelta “cargue” una tarjeta de producto 
💧Selecciona con getElementById la etiqueta idSelector
💧Imprime con innerHTML el contenido guardado en la variable productsTemplate*/

function printCards(arrayOfProducts, idSelector) {//define PRINTCARDS
    let productsTemplate = "";//Variable productsTemplate PARA concatenar tarjetas de productos
    for (const element of arrayOfProducts) { //Itera con for of
        productsTemplate = productsTemplate + createCard(element);
    }
    const productsSelector = document.getElementById(idSelector);//Selecciona con getElementById la etiqueta idSelector
    productsSelector.innerHTML = productsTemplate; //Imprime con innerHTML el contenido guardado en la variable productsTemplate
}

/*
Luego es necesario invocar a la función pasando el array de productos y el id del selector.  A modo de ejemplo:*/
printCards(products, "products");//invocar pasando el array 

/*
Abre con live server el archivo index.html y observa las tarjetas de producto.
Programa y verifica la vista la cantidad de veces que sea necesario para que las tarjetas se rendericen y funcionen correctamente.*/



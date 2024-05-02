/*-----------------------------------------------------------------------
32.3.1   Actividad: Renderizando los productos con un template string*/
/*-----------------------------------------------------------------------*/
/*OBJETIVO:En esta actividad, vas a mejorar la vista principal del proyecto store de 
las secciones anteriores para renderizar las tarjetas de producto con métodos del DOM. 
La tarjeta ya fue maquetada en el curso de HTML-CSS y debería renderizarse de la siguiente manera:*/

/*PASOS*/
/*
-Crea el archivo productCards.js en la carpeta scripts y conectalo con la vista principal. Deberías tener tres scripts (layout, products y productCards). 
-Analiza el código del archivo index.html e identifica la etiqueta que es “padre” de las tarjetas de los productos.
-Asigna a esa etiqueta un id=”products” para usar como selector de JavaScript. */


/*
4. Corta el contenido de todas las tarjetas de productos.
5. Abre el archivo productCards.js y define una variable productsSelector, para seleccionar con el método getElementById la etiqueta 
correspondiente donde se renderizarán las tarjetas de productos.A modo de ejemplo:*/

const productsSelector = document.getElementById("products");



/*-----------------------------------------------------------------------
32.3.2  Actividad: Renderizar los productos de forma dinámica*/
/*-----------------------------------------------------------------------*/
/*Las tarjetas simplemente fueron “impresas” en la vista, pero siguen siendo datos estáticos. En esta actividad, 
vas a mejorar la vista principal del proyecto store para renderizar las tarjetas de producto de forma dinámica. 
Para este ejercicio vas a seguir los siguientes pasos:*/

/*
🍁10. Abre productCards.js y define una función createCard para que reciba como parámetro un objeto y devuelva un 
template string con sólo una tarjeta de producto. El objeto a recibir por la función será un producto con todas 
las propiedades definidas en la clase. 



🍁11. Modifica cada dato “estático” de la tarjeta por la correspondiente propiedad del objeto product. Recuerda que en 
el template string se “invocan” variables de js con ${ }. A modo de ejemplo:
*/

// Función para crear una tarjeta de producto a partir de un objeto
function createCard(product) {
  return `
    <a class="product-card" href="./details.html?id=${product.id}">
      <img
        class="product-img"
        src="${product.images[0]}"
        alt="${product.title}"
      />
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

/*
🍁Reemplaza el contenido de la variable productsTemplate con una itera
ción for of para que cada vuelta “cargue” una tarjeta de producto. */

let productsTemplate = ""; // Comienza con cadena vacía//let para que te permita modificar
// Itera sobre los productos y agrega las tarjetas a la plantilla
for (const product of products) {
  productsTemplate += createCard(product); // Concatenar con "+="
}
/*
🍁Imprime el contenido en el selector con la propiedad innerHTML.*/
// Inserta las tarjetas de productos en el selector correspondiente
productsSelector.innerHTML = productsTemplate;

/*
🍁Abre con live server el archivo index.html y observa las tarjetas de producto.
🍁Programa y verifica la vista la cantidad de veces que sea necesario para que las tarjetas se rendericen y funcionen correctamente.
 */

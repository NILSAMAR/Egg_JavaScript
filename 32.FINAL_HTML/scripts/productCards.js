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

//Obtenemos el elemento div mediante su ID
var myDiv = document.getElementById('products');
// Modificamos el atributo "id" para cambiar su valor
myDiv.setAttribute('id', 'products');

/*
4. Corta el contenido de todas las tarjetas de productos.
5. Abre el archivo productCards.js y define una variable productsSelector, para seleccionar con el método getElementById la etiqueta 
correspondiente donde se renderizarán las tarjetas de productos.A modo de ejemplo:*/


const productsSelector = document.getElementById("products");

/*
6. Define una variable productsTemplate con un template string y pega el contenido de todas las tarjetas: */
let productsTemplate = `
<a class="product-card" href="./details.html">
          <img
            class="product-img"
            src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
            alt="iPad Pro 12.9"
          />
          <div class="product-info">
            <span class="product-title">iPad Pro 12.9</span>
            <span class="product-description">Silver</span>
            <div class="product-price-block">
              <span class="product-price">900000</span>
              <span class="product-discount">50% Off</span>
            </div>
            <div class="product-tax-policy">
              Incluye impuesto País y percepción AFIP
            </div>
          </div>
        </a>
        <a class="product-card" href="./details.html">
          <img
            class="product-img"
            src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
            alt="iPad Pro 12.9"
          />
          <div class="product-info">
            <span class="product-title">iPad Pro 12.9</span>
            <span class="product-description">Silver</span>
            <div class="product-price-block">
              <span class="product-price">900000</span>
              <span class="product-discount">50% Off</span>
            </div>
            <div class="product-tax-policy">
              Incluye impuesto País y percepción AFIP
            </div>
          </div>
        </a>
        <a class="product-card" href="./details.html">
          <img
            class="product-img"
            src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
            alt="iPad Pro 12.9"
          />
          <div class="product-info">
            <span class="product-title">iPad Pro 12.9</span>
            <span class="product-description">Silver</span>
            <div class="product-price-block">
              <span class="product-price">900000</span>
              <span class="product-discount">50% Off</span>
            </div>
            <div class="product-tax-policy">
              Incluye impuesto País y percepción AFIP
            </div>
          </div>
        </a>
        <a class="product-card" href="./details.html">
          <img
            class="product-img"
            src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
            alt="iPad Pro 12.9"
          />
          <div class="product-info">
            <span class="product-title">iPad Pro 12.9</span>
            <span class="product-description">Silver</span>
            <div class="product-price-block">
              <span class="product-price">900000</span>
              <span class="product-discount">50% Off</span>
            </div>
            <div class="product-tax-policy">
              Incluye impuesto País y percepción AFIP
            </div>
          </div>
        </a>
        <a class="product-card" href="./details.html">
          <img
            class="product-img"
            src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
            alt="iPad Pro 12.9"
          />
          <div class="product-info">
            <span class="product-title">iPad Pro 12.9</span>
            <span class="product-description">Silver</span>
            <div class="product-price-block">
              <span class="product-price">900000</span>
              <span class="product-discount">50% Off</span>
            </div>
            <div class="product-tax-policy">
              Incluye impuesto País y percepción AFIP
            </div>
          </div>
        </a>
        <a class="product-card" href="./details.html">
          <img
            class="product-img"
            src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
            alt="iPad Pro 12.9"
          />
          <div class="product-info">
            <span class="product-title">iPad Pro 12.9</span>
            <span class="product-description">Silver</span>
            <div class="product-price-block">
              <span class="product-price">900000</span>
              <span class="product-discount">50% Off</span>
            </div>
            <div class="product-tax-policy">
              Incluye impuesto País y percepción AFIP
            </div>
          </div>
        </a>
`;

/*
7. Imprime el contenido en el selector con la propiedad innerHTML.*/ //usa la propiedad ineer  en el selectorProducts y asiganale el nombre del 
//variable 
productsSelector.innerHTML = productsTemplate;

/*
🍁 8. Abre con live server el archivo index.html y observa las tarjetas de producto.
9. Programa y verifica la vista la cantidad de veces que sea necesario para que las tarjetas se rendericen y funcionen correctamente.
 */


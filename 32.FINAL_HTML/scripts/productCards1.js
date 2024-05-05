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

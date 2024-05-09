/*-----------------------------------------------------------------------
37.2  ✏️Actividad: Generar tarjetas de carrito dinámicas */
/*-----------------------------------------------------------------------*/
/*Para este ejercicio tienes que seguir los siguientes pasos:
💧1.Desde Visual Studio Code, abre la carpeta store y crea el archivo cart.js en la carpeta scripts
💧2.Conecta el nuevo script en la vista del carrito. 
💧3.Abre el archivo cart.js y define una variable cartproducts.
💧4.Asigna a esta variable un array con los productos del localStorage.
💧5.Analiza la tarjeta del producto del carrito diseñada en la actividad anterior e identifica las propiedades de cada producto.
💧6.Define las funciones necesarias para renderizar dinámicamente todos los productos agregados al carrito. 
A modo de ejemplo createCartCard para crecibir un objeto (producto) y retornar un template dinámico) y printCartCards para recibir 
un array de productos y luego imprimir en la vista las tarjetas.
💧7.Programa y verifica la vista la cantidad de veces que sea necesario para que la vista se renderice y funcione correctamente*/

// Definiendo variable cartproducts que traiga el array del localStorage
let cartproducts = JSON.parse(localStorage.getItem('cart'));
/**
 * Renderizar dinámicamente los productos del carrito*/

//Definir funcion printCart
function printCart() {
    //Traer el selector del contenedor de productos
    const container = document.querySelector(".container");
    //Limpiar el contenedor
    container.innerHTML = "";

    if (cartproducts === null || cartproducts.length === 0) {
        container.innerHTML = `
    <article class="product-cart">
        <div class="title-product">No hay productos en el carrito</div>
    </article>
    `;
    } else {
        //Iterar sobre los productos del carrito
        cartproducts.forEach(product => {
            //Crear un div que contenga la información del producto
            const productDiv = document.createElement("article");
            //Agregar la clase product al div
            productDiv.classList.add("product-cart");
            //Agregar el contenido al div
            productDiv.innerHTML = `
    <img class="product-img" src="${product.images}">

    <div class="product-details">
      <div class="title-product">${product.title}</div>
      <div class="color-product">${product.color}</div>
      <!--Mostrar la cantidad a comprar-->
      <input class="product-input" type="number" name="quantity" min="1" id="${product.id}_${product.color}" value="${product.quantity}" onchange="changeQuantity(event)">
    </div>
    <div class="product-price">
        P.U. $ ${product.price}.00 <br>
        --------------- <br>
     Subtotal $ ${product.price * product.quantity}.00
    </div>
    `;
            //Agregar el div al contenedor
            container.appendChild(productDiv);
        });
    }
}


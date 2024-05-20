/*-----------------------------------------------------------------------
37.1  ✏️Actividad: Carrito de Compras */
/*-----------------------------------------------------------------------*/
/*🍁En esta actividad, procederás a maquetar la página del carrito estática. 
Es fundamental utilizar la barra de navegación, el pie de página y los estilos 
del proyecto para mantener la coherencia de las interfaces. Para este ejercicio 
tienes que seguir los siguientes pasos:

💧1.Desde Visual Studio Code, abre la carpeta store
💧2.Duplica index.html y cambia su nombre por cart.html.
💧3.Modifica la sección del hero y elimina el contenido de la vista.
💧4.Conecta correctamente la hoja de Abre con live server el archivo cart.html y observa el correcto renderizado de los elementos “base” de la vista. Realiza las modificaciones pertinentes en caso contrario.estilos correspondiente y el script hacia layout.js.
💧5.Dentro del contenido de la página agrega las etiquetas:
🌍1. article con id=”cartproducts” para la tarjeta de producto del carrito
🌍2. un article con id=”total” para el cuadro de cálculo del total a pagar:
💧6. Programa y verifica la vista la cantidad de veces que sea necesario para que la vista se renderice y funcione correctamente.*/

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


/*-----------------------------------------------------------------------
37.3  ✏️Actividad: Generar tarjetas de carrito dinámicas */
/*-----------------------------------------------------------------------*/
/*
💧1.Desde Visual Studio Code, abre la carpeta store y crea el archivo cart.js en la carpeta scripts
💧2.Conecta el nuevo script en la vista del carrito.
💡Presta atención al orden de los scripts. El script cart debe tener acceso a las variables y funciones de layout y 
el script total tiene acceso a las variables y funciones de layout y cart.
💧3.Abre el archivo total.js y define las funciones necesarias para renderizar dinámicamente el cuadro de cálculo de 
la cuenta a pagar. A modo de ejemplo createTotalTemplate para recibir como parámetro un array de productos y devuelva un 
template string con el cuadro de detalle del total y printTotal para recibir un array de objetos  y luego imprimir en la vista  
el template generado.
💧4.La función necesita iterar los productos para que cada vuelta sume el subtotal (precio * cantidad) con el de la siguiente vuelta.
*/


// Definiendo variable cartproducts que traiga el array del localStorage
let cartproducts = JSON.parse(localStorage.getItem('cart'));

/* Renderizar dinámicamente los productos del carrito*/


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

/** Renderizar el total a pagar
*/
//Definir función printTotal
function printTotal() {
    //Definir variable para almacenar el precio total
    let totalPrice = 0;

    if (cartproducts !== null) {

        //Iterar sobre los productos del carrito
        cartproducts.forEach(product => {
            //Sumar el precio de cada producto al total
            totalPrice = totalPrice + (product.price * product.quantity);
        });
    }

    //Traer el selector del contenedor del total
    const totalContainer = document.querySelector("#total");
    //Limpiar el contenedor
    totalContainer.innerHTML = "";
    //Agregar el html
    totalContainer.innerHTML = `
    <h1 class="cart-title">Resumen del pedido</h1>
        <p class="cart-total">Total        USD $${(totalPrice !== null || totalPrice != 0) ? totalPrice : 0}</p>
        <p class="cart-tax">Taxes</p>
        <button class="cart-btn" id="buy" type="button">COMPRAR</button>
    `;
    const buySelector = document.getElementById("buy");

    buySelector.addEventListener("click", () => {
        //Borrar los productos del carrito
        localStorage.removeItem('cart');
        //Redirigir a la página de inicio
        window.location.href = "./cart.html";
    });
}

/**
 * Evento changeQuantity(event) para cambiar la cantidad de productos en el carrito
 */
//Definir función changeQuantity
function changeQuantity(event) {
    //Traer el id del producto
    const id = event.target.id.split("_");
    //Traer el valor de la cantidad
    const quantity = event.target.value;
    //Iterar sobre los productos del carrito
    cartproducts.forEach(product => {
        //Verificar si el id del producto es igual al id del producto seleccionado
        if (product.id == id[0] && product.color == id[1]) {
            //Cambiar la cantidad del producto
            product.quantity = quantity;
        }
    });
    //Guardar el carrito en localStorage
    localStorage.setItem('cart', JSON.stringify(cartproducts));
    printCart();
    printTotal();
}

printCart();
printTotal();
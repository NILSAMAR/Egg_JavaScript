/*-----------------------------------------------------------------------
34.2  ✏️ Actividad: Capturar el id del producto */
/*-----------------------------------------------------------------------*/
/**
💧1.Desde Visual Studio Code, abre la carpeta store y luego el archivo details.html. ✅
💧2.Quita el input de búsqueda de la barra de navegación.✅
💧3.Conecta el script layout.js y modifica la barra de navegación y el pie de página para que 
se generen dinámicamente. ✅
💧4.Conecta el script products.js para tener el array de productos disponible para la vista.✅
💧5.Crea el archivo productDetail.js en la carpeta scripts y conectalo con la vista product.html✅
💧6.Captura el parámetro id utilizando las propiedades y métodos de la teoría.✅
💧7.Imprime por consola el id. A modo de ejemplo: ✅*/

//Variable que guarda la ubicación actual
const query = location.search;
//Variable que instancia la clase URLSearchParams
const params = new URLSearchParams(query);
//Variable que captura el id
const id = params.get("id");
console.log(id);
/*
💧8.Abre con live server el archivo index.html, prueba el correcto direccionamiento de los links y 
verifica la impresión por consola del id. */

/*-----------------------------------------------------------------------
34.3  ✏️Actividad: Renderizar dinámicamente la vista de detalle */
/*-----------------------------------------------------------------------*/
/**Para este ejercicio tienes que seguir los siguientes pasos:
💧1.Desde Visual Studio Code, abre la carpeta store y luego el archivo productDetail.js
💧2.Define la función printDetails para que:
    🌍1.dependa del parámetro id del detalle del producto
    🌍2.guarde en una variable el producto encontrado con el id del parámetro
    🌍3.defina una variable para la plantilla de la vista de detalles e interpole con ${} los datos    correspondientes al detalle del producto
    🌍4.seleccione un id del html donde se imprimirá la plantilla 
    🌍5.actualice la vista con la renderización del detalle
A modo de ejemplo:*/
//pegar todo el contenido de la vista de detalle
//identificar los datos estáticos
//interpolarlos con ${}

function printDetails(id) {
  const product = products.find((each) => each.id === id);
  // Plantilla para la vista de detalles
  //El map para los colores lo que hace es array con cada opcion de producto
  const detailsTemplate = `
    <section class="product-images-block">
        <div class="product-images">
          ${product.images.map((images) => `<img class="mini-img" src="${images}" alt="${product.title}" onclick="changeMini(event)" />`).join("")}
        </div>
        <img 
        class="big-img" 
        id="big-img" 
        src="${product.images[0]}" 
        alt="MacBook Pro 13'4" />
      </section>
      <div class="product-description-block">
        <h1 class="product-title">"${product.title}"</h1>
        <form class="product-selector">
          <fieldset class="product-fieldset">

            <label class="product-label" for="color">Color</label>
            <select 
            class="product-select" 
            type="text" placeholder="Selecciona un color" 
            id="color"
            >
              ${product.colors.map(color => `<option value="${color}">${color}</option>`).join('')}
            </select>
          </fieldset>
        </form>
        <div class="product-description">
          <span class="product-label">Descripción</span>
          <p>
            ${product.description}
          </p>
        </div>
      </div>
      <div class="product-checkout-block">
        <div class="checkout-container">
          <span class="checkout-total-label">Total:</span>
          <h2 id="price" class="checkout-total-price">$${product.price}</h2>
          <p class="checkout-description">
            ${product.taxPolicy}
          </p>
          <ul class="checkout-policy-list">
            <li>
              <span class="policy-icon"><img src="./assets/truck.png" alt="Truck" /></span>
              <span class="policy-desc">Agrega el producto al carrito para conocer los costos de envío</span>
            </li>
            <li>
              <span class="policy-icon"><img src="./assets/plane.png" alt="Plane" /></span>
              <span class="policy-desc">Recibí aproximadamente entre 10 y 15 días hábiles, seleccionando envío normal</span>
            </li>
          </ul>
          <div class="checkout-process">
            <div class="top">
              <input type="number" min="1" value="1" onclick="changePrice(event)" />
              <button type="button" class="cart-btn" onclick="saveProduct(${product.id})">
                Añadir al Carrito
              </button>
            </div>
          </div>
        </div>
      </div>
`;
  const detailsSelector = document.querySelector("#details");
  detailsSelector.innerHTML = detailsTemplate;
}
// Llama a la función para renderizar el detalle
printDetails(id);

/*
💧1.Abre con live server el archivo index.html el archivo index.html, prueba el direccionamiento de los links y 
verifica la correcta renderización de la vista de detalle.
💧2.Programa y verifica la vista la cantidad de veces que sea necesario para que la vista se renderice correctamente.. */

/*-----------------------------------------------------------------------
34.4  ✏️Actividad: Renderizar dinámicamente el select de color */
/*-----------------------------------------------------------------------*/
/*
En esta actividad, sólo nos enfocaremos en renderizar dinámicamente las opciones del select de 
colores del producto. Para este ejercicio tienes que:
💧1.Desde Visual Studio Code, abre la carpeta store y luego el archivo productDetail.js
💧2.Modifica la función printDetails para que el select renderice de forma dinámica las opciones de los colores.
💧3.Luego de “mapear”, une todos los elementos del array transformado con join() para retornar un único template. A modo de ejemplo*/

/*-----------------------------------------------------------------------
35.1  ✏️ Actividad: Programar las miniaturas de la vista de detalle */
/*-----------------------------------------------------------------------
💧1.Desde Visual Studio Code, abre la carpeta store y luego el archivo productDetail.js
💧2.Modifica la función printDetails para que cada imagen de la miniatura tenga asignado un evento de click “en línea”. Cada click en una miniatura debe ejecutar una función que actualice la foto que renderiza la foto agrandada. Utiliza el atributo onclick para que ejecute la función changeMini.
💧3.Define la función changeMini para que:
      🌍1. dependa del evento de click
      🌍2.guarde en una variable la ruta de la imagen de la miniatura 
      🌍3.seleccione el id de la imagen agrandada
      🌍4.actualice la vista con la imagen agrandada seleccionada
A modo de ejemplo: */

/*** Definir función para cambiar imagen*/
function changeMini(event) {
  //Traer el src de la imagen seleccionada
  const selectedSrc = event.target.src;
  //Traer el selector de la imagen grande
  const bigSelector = document.querySelector("#big-img");
  //Cambiar el src de la imagen grande
  bigSelector.src = selectedSrc;
}
/*
💧1.Programa y verifica la vista la cantidad de veces que sea necesario para que la vista se renderice y funcione correctamente.
 */
printDetails(id);


/*-----------------------------------------------------------------------
35.2  ✏️ Actividad: Calcular el subtotal a pagar */
/*-----------------------------------------------------------------------
💧1.Desde Visual Studio Code, abre la carpeta store y luego el archivo productDetail.js
💧2.Modifica la función printDetails para que el input numérico de la cantidad tenga asignado un evento de cambio “en línea”. 
Cada cambio en las unidades a comprar debe ejecutar una función que actualice el subtotal a pagar. Utiliza el atributo onchange 
para que ejecute la función changeSubtotal. 
💧3.Define la función changeSubtotal para que:
  🌍1.dependa del evento de cambio
    🌍2.guarde en una variable la cantidad de productos a comprar
    🌍3.busque el producto
    🌍4.calcule el subtotal
    🌍5.seleccione la etiqueta donde se renderizar el subtotal
    🌍6.actualice la vista con la imagen agrandada seleccionada
💧4.Programa y verifica la vista la cantidad de veces que sea necesario para que la vista se renderice y funcione correctamente.*/

/*** Definir funcion para cambiar precio*/
function changePrice(event) {
  //traer la cantidad del input de tipo number
  const quantity = event.target.value;
  //traer el producto
  const product = products.find(product => product.id == id);
  //traer el selector del precio
  const priceSelector = document.querySelector("#price");
  //cambiar el precio total
  priceSelector.innerHTML = `$${quantity * product.price}`;
}

/*-----------------------------------------------------------------------
36.1  ✏️ Actividad: Agregar un producto al carrito
/*-----------------------------------------------------------------------/*
🍁Cada vez que un usuario realiza un click en el botón “añadir al carrito”: el producto junto con las especificaciones 
seleccionadas (como la cantidad y color) se guardan en la base de datos de la aplicación. 
🍁Por el momento no vas a trabajar con bases de datos, pero el localStorage es una buena aproximación. Para este ejercicio 
tienes que seguir los siguientes pasos:

💧1.Desde Visual Studio Code, abre la carpeta egg_js y luego el archivo productDetail.js
💧2.Modifica la función printDetails para que el botón “añadir” tenga asignado un evento de click “en línea”. 
Cada click del botón debe ejecutar una función que guarde los datos más importantes del producto. 
Utiliza el atributo onclick para que ejecute la función saveProduct. A modo de ejemplo:
💧3.Define la función saveProduct para que:
        🌍1. dependa del id del botón
        🌍2. busque un producto con el id
        🌍3.defina un objeto con las propiedades especificadas en la compra
        🌍4.convierta a JSON el objeto
        🌍5.guarde el objeto en la memoria del navegador

💡Buscar la forma de capturar todos los datos del producto agregado.
💧5. Programa y verifica la vista la cantidad de veces que sea necesario para que la vista se renderice y funcione correctamente.*/


/*** Definir función para añadir al carrito*/
function saveProduct(id) {
  //traer el producto
  const product = products.find(product => product.id == id);
  //defina un objeto con las propiedades especificadas en la compra
  const objectProduct = {
    id: product.id,
    title: product.title,
    price: product.price,
    color: document.querySelector("#color").value,
    image: product.images[0],
    quantity: document.querySelector("input").value,
  };


/*-----------------------------------------------------------------------
36.2  ✏️ Actividad: Agregar un producto al carrito
/*-----------------------------------------------------------------------
🍁La función saveProduct guarda en la clave cart del localStorage un producto. Cuando quieres agregar otro producto,
la funcionalidad desarrollada “sobre-escribe” la clave cart con el producto recientemente “añadido” (borrando los 
datos del producto añadido con anterioridad). 
🍁Es necesario modificar la función para que guarde todos los productos. Para este ejercicio tienes que seguir 
los siguientes pasos:

💧1.Desde Visual Studio Code, abre la carpeta egg_js y luego el archivo productDetail.js
💧2.Modifica la función saveProduct para que además de lo que ya hacía:
        🌍1. busque y verifique si existe la clave cart en localstorage
        🌍2. si la clave existe debe agregar el nuevo producto al array de productos y guardarlo en el storage
        🌍3. si la clave no existe debe crear un array con el producto y guardarlo en el storage
💧4.Programa y verifica la vista la cantidad de veces que sea necesario para que la vista se renderice y funcione correctamente.*/

  // Verificar si la clave 'cart' existe en localStorage
  if (localStorage.getItem('cart')) {
    // Si existe, obtener el contenido y convertirlo de nuevo en un array
    let cart = JSON.parse(localStorage.getItem('cart'));
    // Agregar el nuevo producto al array
    cart.push(objectProduct);
    // Guardar el array actualizado en el storage
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    // Si no existe, crear un nuevo array con el producto y guardarlo en el storage
    let cart = [objectProduct];
    localStorage.setItem("cart", JSON.stringify(cart));
  }

}

printDetails(id);



  












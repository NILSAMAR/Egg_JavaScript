/*-----------------------------------------------------------------------
33.3   Actividad: Renderizando los productos con un template string*/
/*-----------------------------------------------------------------------*/
/*OBJETIVO:En esta actividad, vas a mejorar la vista principal del proyecto store de 
las secciones anteriores para renderizar las tarjetas de producto con métodos del DOM. 
La tarjeta ya fue maquetada en el curso de HTML-CSS y debería renderizarse de la siguiente manera:*/

/*PASOS*/
/*
Para este ejercicio vas a seguir los siguientes pasos:
1. Desde Visual Studio Code, abre la carpeta store
2. Abre index.html y conecta correctamente el script products.js

3. El script products debe tener únicamente:
-clase Product sólo con el constructor
-seis instancias de la clase Product (con todas las propiedades)
-array products con las seis instancias
*/

//clase Product sólo con el constructor
class Product { 
  constructor(id, title, price, stock, images, onsale, supplier) {
      this.id = id; // cadena de texto
      this.title = title; // cadena de texto
      this.price = price; // numérico
      this.stock = stock; // numérico
      this.images = images; // arreglo
      this.onsale = onsale; // booleano
      this._supplier = supplier; // propiedad privada
  }
}
//seis instancias de la clase Product (con todas las propiedades)
const prod1 = new Product();
const prod2 = new Product('fft', 'title', 2);
const prod3 = new Product('fft', 'title', 2, 4, [], true);
const prod4 = new Product('fft', 'title', 2, 4, [], true, 'suplier 1');
const prod5 = new Product('fft', 'title', 2, 4, [], true, 'suplier 2');
const prod6 = new Product('fft', 'title', 2, 4, [], true, 'suplier 3');

// Array products que contiene las seis instancias
const products = [prod1, prod2, prod3, prod4, prod5, prod6];




//Obtenemos el elemento div mediante su ID
var miDiv = document.getElementById('navbar');
// Modificamos el atributo "id" para cambiar su valor
miDiv.setAttribute('id', 'nav');
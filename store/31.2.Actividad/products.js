/*-----------------------------------------------------------------------
31.2 Actividad: Creación de un producto */
/*-----------------------------------------------------------------------*/
/*OBJETIVO:En esta actividad, mejorarás el programa store  de las secciones anteriores para definir los 
primeros productos de la aplicación web. 
A partir de este punto, comenzarás a definir las variables en inglés, ya que es una práctica habitual en el
mundo de la programación. Sigue estos pasos:
*/
/*1. Desde Visual Studio Code, abre la carpeta store*/
/*2. En products.js, define la clase Product con las propiedades:
-id y title (nombre): deben ser una cadena de texto.
-price (precio) y stock (cantidad) deben ser de tipo numérico.
-images (imágenes) por ahora asigna []
-y onsale (en oferta): debe ser un booleano para definir si está o no está en oferta.
 */

class Product {
  constructor(id, title, price, stock, images, onsale) {
    this.id = id;//cadena de texto
    this.title = title;//cadena de texto
    this.price = price;//Numerico
    this.stock = stock;//Numerico
    this.images = images;//[]
    this.onsale = onsale;//boleano true or false
  }
}
/*3. Define la variable prod1 e implementa el constructor new para crear una instancia de Product vacía. A modo de ejemplo: */
const prod1 = new Product();
/*4. Define la variable prod2 para crear una instancia de Product con las propiedades id, title y price.*/
const prod2 = new Product('fft', 'title', 2);
/*5. Define la variable prod3 para crear una instancia de Product con todas las propiedades que requiere la clase.*/
const prod3 = new Product('fft', 'title', 2, 4, [] ,true);
/*6. Programa la impresión en consola de prod1, prod2 y prod3.*/
console.log(prod1);
console.log(prod2);
console.log(prod3);
/*
7. Programa la impresión de la propiedad title de prod2 y de la propiedad onsale de prod3.*/
console.log("Title of prod2:", prod2.title);
console.log("On sale status of prod3:", prod3.onsale);
/*
8. Abre con live server el archivo index.html y verifica las salidas programadas
 */


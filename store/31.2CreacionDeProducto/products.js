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


//Definir variable producto1
const producto1 = {
    nombre: "celular",
    precio: 100000,
    stock: 2
    };

/*2. Agrega las propiedades id y foto, probando estas formas.*/
producto1.id = "id123";
producto1[foto] = "https://i.postimg.cc/Jn2C5W84/galaxy1.webp";

//IMPRESION EN CONSOLA
/*3. Programa la impresión en consola de producto1. */
console.log(producto1);
alert(producto1);

/*4. Programa la impresión de la propiedad nombre de producto1*/
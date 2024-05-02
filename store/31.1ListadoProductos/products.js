/*-----------------------------------------------------------------------
32.1  Actividad: Listado de productos en la tienda */
/*-----------------------------------------------------------------------*/
/*OBJETIVO:En esta actividad, vas a mejorar el programa store de las secciones anteriores definiendo una lista con las 
instancias de objetos creados hasta el momento. Para este ejercicio tienes que seguir los siguientes pasos:*/

/**
🍁Desde Visual Studio Code, abre la carpeta store desarrollada en secciones anteriores.
🍁Modifica products.js, debe quedar únicamente la clase Product y las instancias de productos creadas.
🍁Completa los datos de todas las instancias y crea las instancias necesarias para tener cuatro productos.
🍁Define la variable products como un array con los [ ]. Dentro de array listar cada uno de los productos definidos. A modo de ejemplo
 */

//CLASE PRODUCT
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
  // Getter para obtener el proveedor (_supplier)
  get getSupplier() {
    return this._supplier;
  }
}
//INSTANCIAS
const prod1 = new Product("fft", "PROD1", 2, 4, [], true, 'suplier 1');
const prod2 = new Product('fft', 'PROD2', 2, 4, [], true, 'suplier 2');
const prod3 = new Product('fft', 'PROD3', 2, 4, [], true, 'suplier 3');
const prod4 = new Product('fft', 'PROD4', 2, 4, [], true, 'suplier 4');
//PRODUCTOS
console.log(prod1);
console.log(prod2);
console.log(prod3);
console.log(prod4);

console.log("Id of prod1:", prod1.id);
console.log("Title of prod2:", prod2.title);
console.log("On sale status of prod3:", prod3.onsale);
console.log("Suplier of prod4:", prod4.getSupplier);

//ARRAY
const products = [prod1, prod2, prod3, prod4];
/*
🍁Programa la impresión en consola del array completo.
🍁Programa la impresión del segundo elemento del array.
🍁Para acceder al último elemento de un array hay que posicionarse en el elemento “(length)-1”. 
🍁Programa la impresión de la propiedad title del último elemento del array. 
🍁Abre con live server el archivo index.html y verifica las salida 
*/

// Impresión de acuerdo con las instrucciones
console.log("Array completo:", products);
console.log("Segundo elemento del array:", products[1]);

const lastIndex = products.length - 1;
console.log("Último elemento del array:", products[lastIndex]);
console.log("Título del último elemento:", products[lastIndex].title);
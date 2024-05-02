/*-----------------------------------------------------------------------
32.3   Actividad: Eliminación de productos de una lista/
/*-----------------------------------------------------------------------*/
/**Para completar esta tarea, sigue estos pasos:
🍁Desde Visual Studio Code, abre la carpeta store
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
const prod5 = new Product('fft', 'PROD5', 2, 4, [], true, 'suplier 5');
const prod6 = new Product('fft', 'PROD6', 2, 4, [], true, 'suplier 6');

//PRODUCTOS
console.log(prod1);
console.log(prod2);
console.log(prod3);
console.log(prod4);
console.log(prod5);
console.log(prod6);

console.log("Id of prod1:", prod1.id);
console.log("Title of prod2:", prod2.title);
console.log("On sale status of prod3:", prod3.onsale);
console.log("Suplier of prod4:", prod4.getSupplier);
console.log("Suplier of prod5:", prod5.getSupplier);
console.log("Suplier of prod6:", prod6.getSupplier);

//ARRAY
const products = [prod1, prod2, prod3, prod4]; // Definir el array primero
products.unshift(prod5); // Agregar prod5 al inicio
products.push(prod6); // Agregar prod6 al final

console.log("Array completo después de agregar prod5 y prod6:", products);//Impresion con elementos agregados

/*
🍁En products.js quita el primer elemento del array utilizando el método shift. 
🍁Quita el último elemento del array utilizando el método pop. 
🍁Agrega las impresiones que creas convenientes para observar los cambios en la lista de productos.
🍁Abre con live server el archivo index.html y verifica las salidas programadas. */

//Quitar el primer elemento
products.shift(); // Esto elimina prod5, que era el primer elemento agregado

//Quitar el último elemento
products.pop(); // Esto elimina prod6, que era el último elemento agregado

//Impresiones para observar los cambios
console.log("Array después de quitar el primer ", products);

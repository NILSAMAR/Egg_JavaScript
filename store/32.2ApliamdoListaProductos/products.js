/*-----------------------------------------------------------------------
32.2  Actividad: Ampliando la lista de productos*/
/*-----------------------------------------------------------------------*/
/**Para este ejercicio tienes que seguir los siguientes pasos:
🍁Desde Visual Studio Code, abre la carpeta store
🍁En products.js define las variables prod5 y prod6 para crear dos instancias de Product con 
todas las propiedades que requiere la clase.
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

/*
🍁Agrega prod5 al inicio del array utilizando el método unshift. A modo de ejemplo:
🍁Agrega prod6 al final del array utilizando el método push. A modo de ejemplo: */

//ARRAY
const products = [prod1, prod2, prod3, prod4]; // Definir el array primero
products.unshift(prod5); // Agregar prod5 al inicio
products.push(prod6); // Agregar prod6 al final

/**
🍁Agrega las impresiones que creas convenientes para observar los cambios en la lista de productos.
🍁Abre con live server el archivo index.html y verifica las salidas programadas. */
// Impresión del array completo
console.log("Array completo después de agregar prod5 y prod6:", products);

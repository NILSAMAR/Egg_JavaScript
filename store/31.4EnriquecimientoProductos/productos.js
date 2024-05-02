/*-----------------------------------------------------------------------
32.4   Actividad: Enriquecimiento de información de productos
/*-----------------------------------------------------------------------*/
/*OBJETO: En esta actividad, mejorarás la información de los productos agregando 
detalles, fotos y colores. Sigue estos pasos: */
/**
🍁Desde Visual Studio Code, abre la carpeta store
🍁En products.js agrega al constructor de productos:
//!Colors: para definir un array de colores del producto.
//!Description: para definir un texto descriptivo del producto.
🍁Define estas nuevas propiedades para cada una de las instancias programadas.
 */

//CLASE PRODUCT
class Product {
    constructor(id, title, price, stock, images, onsale, supplier, colors, description) {
        this.id = id; // cadena de texto
        this.title = title; // cadena de texto
        this.price = price; // numérico
        this.stock = stock; // numérico
        this.images = images; // arreglo
        this.onsale = onsale; // booleano
        this._supplier = supplier; // propiedad privada
        this.colors = colors; // arreglo de colores
        this.description = description; // texto descriptivo
    }
    // Getter para obtener el proveedor (_supplier)
    get getSupplier() {
        return this._supplier;
    }
}
/*
🍁Define los arrays de imágenes de cada producto creado. Al menos tres fotos para dos productos y el resto dos.
 */
//INSTANCIAS
const prod1 = new Product("fft", "PROD1", 2, 4, ["image1.jpg", "image2.jpg"], true, 'suplier 1',"color1", "Description1");
const prod2 = new Product('fft', 'PROD2', 2, 4, ["image3.jpg", "image4.jpg", "image5.jpg"], true, 'suplier 2',"color2", "Description2");
const prod3 = new Product('fft', 'PROD3', 2, 4, ["image6.jpg", "image7.jpg"], true, 'suplier 3',"color3", "Description3");
const prod4 = new Product('fft', 'PROD4', 2, 4, ["image8.jpg", "image9.jpg"], true, 'suplier 4',"color4", "Description4");
const prod5 = new Product('fft', 'PROD5', 2, 4, ["image10.jpg", "image11.jpg", "image12.jpg"], true, 'suplier 5',"color5", "Description5");
const prod6 = new Product('fft', 'PROD6', 2, 4, ["image13.jpg", "image14.jpg"], true, 'suplier 6',"color6", "Description6");

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
🍁Agrega las impresiones que creas convenientes para observar los cambios en la lista de productos.
🍁Abre con live server el archivo index.html y verifica las salidas programadas. */
//ARRAY
const products = [prod1, prod2, prod3, prod4]; // Definir el array primero
console.log("Array completo después de agregar prod5 y prod6:", products);//Impresion con elementos agregados
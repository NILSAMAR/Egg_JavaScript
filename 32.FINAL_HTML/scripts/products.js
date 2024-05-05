//CLASE PRODUCT
class Product {
  constructor(id, title, price, stock, images, onsale, supplier, colors, description, discount) {
      this.id = id; // cadena de texto
      this.title = title; // cadena de texto
      this.price = price; // numérico
      this.stock = stock; // numérico
      this.images = images; // arreglo
      this.onsale = onsale; // booleano
      this._supplier = supplier; // propiedad privada
      this.colors = colors; // arreglo de colores
      this.description = description; // texto descriptivo
      this.discount = discount;
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
const prod1 = new Product('fft', 'Laptop 12.9', '900.000', 4, ["assets/mock1.jpg"], true, 'suplier 1','red', "Hermosa Tablet", "50");
const prod2 = new Product('fft', 'iPad Pro 12.9', '900.000', 4, ["https://i.postimg.cc/kX8PKZpq/ipad2.jpg"], true, 'suplier 2',["yellow"], "Hermosa Tablet", "50");
const prod3 = new Product('fft', 'Computadora', '900.000', 4, ["assets/mock2.jpg"], true, 'suplier 3',["yellow"], "Hermosa Tablet", "50");
const prod4 = new Product('fft', 'iPad Pro 12.9', '900.000', 4, ["assets/tablet2.png"], true, 'suplier 4',["yellow"], "Hermosa Tablet", "50");
const prod5 = new Product('fft', 'iPad Pro 12.9', '900.000', 4, ["https://i.postimg.cc/kX8PKZpq/ipad2.jpg"], true, 'suplier 5',"color5", "Hermosa Tablet", "50");
const prod6 = new Product('fft', 'iPad Pro 12.9', '900.000', 4, ["https://i.postimg.cc/kX8PKZpq/ipad2.jpg"], true, 'suplier 6',"color6", "Hermosa Tablet", "50");

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
const products = [prod1, prod2, prod3, prod4, prod5, prod6]; // Definir el array primero
console.log("Array completo después de agregar prod5 y prod6:", products);//Impresion con elementos agregados


  
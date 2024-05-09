//CLASE PRODUCT
class Product {
  constructor(id, title, price, stock, images, onsale, supplier, colors, description ,taxPolicy) {
      this.id = id; // cadena de texto
      this.title = title; // cadena de texto
      this.price = price; // numérico
      this.stock = stock; // numérico
      this.images = images; // arreglo
      this.onsale = onsale; // booleano
      this._supplier = supplier; // propiedad privada
      this.colors = colors; // arreglo de colores
      this.description = description; // texto descriptivo
      this.taxPolicy = taxPolicy; // taxpolicy
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
const prod1 = new Product("001", "CAMARA INSTAX", 99, 20, ["./assets/cam1.png", "./assets/cam1_2.png", "./assets/cam1_3.png"], "50", "CAMARA INSTAX SQUARE SQ1 AZUL GLACIAR", ["black", "white"], "Cámara Instax Square SQ1| Color: Azul glaciar | Dimensiones: 130,7 × 118,6 × 57,5 mm| Peso: 390 gr. (sin pilas, correa ni película) | Imágenes referenciales ","Incluye impuesto País y percepción AFIP");
const prod2 = new Product("002", "Macbook2 Pro 15'4",22, 20, ["./assets/mock1.jpg", "./assets/mock2.jpg", "./assets/cel1.png"], "50", "Mac", ["black", "white"], "Space Gray","Incluye impuesto País y percepción AFIP");
const prod3 = new Product("003", "Macbook3 Pro 15'4", 40, 20, ["./assets/mock2.jpg", "./assets/mock2.jpg", "./assets/cel1.png"], "50", "Mac", ["black", "white"], "Space Gray","Incluye impuesto País y percepción AFIP");
const prod4 = new Product('Id del array', 'iPad Pro 12.9', 100, 4, ["./assets/mock1.jpg", "./assets/mock2.jpg", "./assets/cel1.png"], "50", ["Blanco","Rosado", "Lila"],["Blanco","Rosado", "Lila"], "Hermosa Tablet", "Incluye impuesto País y percepción AFIP");
const prod5 = new Product('Id del array', 'iPad Pro 12.9', 120, 4, ["./assets/mock2.jpg", "./assets/mock2.jpg", "./assets/cel1.png"], "50", ["Blanco","Rosado", "Lila"],["Blanco", "Rosado", "Lila"], "Hermosa Tablet", "Incluye impuesto País y percepción AFIP");
const prod6 = new Product('Id del array', 'iPad Pro 12.9', 800, 4, ["./assets/mock1.jpg", "./assets/mock2.jpg", "./assets/cel1.png"], "50", ["Blanco","Rosado", "Lila"],["yellow","red"], "Hermosa Tablet", "Incluye impuesto País y percepción AFIP");

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


  
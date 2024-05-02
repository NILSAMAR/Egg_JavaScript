const producto1 = {
  nombre: "celular",
  precio: 100000,
  stock: 2
};

producto1.id = "id123";
producto1["foto"] = "https://i.postimg.cc/Jn2C5W84/galaxy1.webp";

console.log(producto1);


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
  //Metodo sells units
  sellUnits(units) {
    if (units > this.stock) {
      console.error(`Error: No hay suficientes unidades en stock para vender ${units} unidades. Stock actual: ${this.stock}`);
      return;
    }
    this.stock = this.stock - units
  }

  // Getter para obtener el proveedor (_supplier)
  get getSupplier() {
    return this._supplier;
  }

  // Setter para establecer el proveedor (_supplier)
  set setSupplier(newSupplier) {
    this._supplier = newSupplier;
  }
}

const prod1 = new Product();
const prod2 = new Product('fft', 'title', 2);
const prod3 = new Product('fft', 'title', 2, 4, [], true);
const prod4 = new Product('fft', 'title', 2, 4, [], true, 'suplier 1');
const prod5 = new Product('fft', 'title', 2, 12, [], true, 'suplier 2');

prod5.sellUnits(10) //12-10=newstock=2
prod5.sellUnits(5)//2-5=-3


console.log(prod1);
console.log(prod2);
console.log(prod3);
console.log(prod4);
console.log(prod5);


console.log("Title of prod1:", prod1.id);
console.log("Title of prod2:", prod2.title);
console.log("On sale status of prod3:", prod3.onsale);
console.log("Suplier of prod4:",prod4.getSupplier);
console.log("Suplier of prod5:",prod5.stock); //new product
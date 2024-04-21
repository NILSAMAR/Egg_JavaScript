/*-----------------------------------------------------------------------
31.4 Actividad: VENTA DE PRODUCTOS
 */
/*-----------------------------------------------------------------------*/
/*OBJETIVO:En esta actividad, crearás un método que, por cada venta de un producto, restará
la cantidad vendida al stock del producto de la clase Product. Sigue estos pasos:
*/

/*PASOS*/

/*1. Desde Visual Studio Code, abre la carpeta store*/
/*2. Dentro de la clase Product del archivo products.js, define el método 
sellUnits para que cumpla los requerimientos. A modo de ejemplo::
 */
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


/*3. Define la variable prod5 para crear una instancia de Product con 
todas las propiedades que requiere la clase. Debe tener 12 unidades de stock. */
const prod1 = new Product();
const prod2 = new Product('fft', 'title', 2);
const prod3 = new Product('fft', 'title', 2, 4, [], true);
const prod4 = new Product('fft', 'title', 2, 4, [], true, 'suplier 1');
const prod5 = new Product('fft', 'title', 2, 12, [], true, 'suplier 1');

/*4. Ejecuta el método sellUnits para vender 10 unidades y luego 5 unidades. */
prod5.sellUnits(10)
prod5.sellUnits(5)


/*5. Programa la impresión en consola de prod5.*/
console.log(prod1);
console.log(prod2);
console.log(prod3);
console.log(prod4);
console.log(prod5);

console.log("Title of prod1:", prod1.id);
console.log("Title of prod2:", prod2.title);
console.log("On sale status of prod3:", prod3.onsale);
console.log("Suplier of prod4:", prod4.getSupplier);
console.log("Suplier of prod5:", prod5.sellUnits);

/*
6. Abre con live server el archivo index.html y verifica las salidas programadas.
7. Mejora el método para que si no hay stock suficiente, no se descuenten unidades y se devuelva un mensaje de error.
 */


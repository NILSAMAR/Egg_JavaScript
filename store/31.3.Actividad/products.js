/*-----------------------------------------------------------------------
31.3 Actividad: Obtención y modificación de propiedades de una instancia
 */
/*-----------------------------------------------------------------------*/
/*OBJETIVO:En esta actividad, vas a definir propiedades privadas de la clase Product y vas a crear 
getters y setters para  poder leer y modificar las mismas. Para este ejercicio tienes que seguir 
los siguientes pasos:
*/
/*1. Desde Visual Studio Code, abre la carpeta store*/
/*2. En products.js, modifica el constructor de la clase 
Product para agregar una propiedad privada supllier. A modo de ejemplo:
 */
class Product {
    constructor(id, title, price, stock, images, onsale, supplier) {
        this.id = id;//cadena de texto
        this.title = title;//cadena de texto
        this.price = price;//Numerico
        this.stock = stock;//Numerico
        this.images = images;//[]
        this.onsale = onsale;//boleano true or false
        this._supplier = supplier;//agregar una propiedad privada supllier
    }
}

/*3.Define el método getter y el método setter de esta propiedad. A modo de ejemplo:*/

// Getter para obtener el proveedor (_supplier)
    
// get getSupplier() {
//     return this._supplier;
// }

//   // Setter para establecer el proveedor (_supplier)
// set setSupplier(newName) {
//     this._supplier = newName;
// }


const prod1 = new Product();
const prod2 = new Product('fft', 'title', 2);
const prod3 = new Product('fft', 'title', 2, 4, [], true);
/*4. Define la variable prod4 para crear una instancia de Product con todas las propiedades que requiere la clase. */
const prod4 = new Product('fft', 'title', 2, 4, [], true,);
/*5. Modifica el proveedor implementando el setter definido de prod4. */

console.log(prod1);
console.log(prod2);
console.log(prod3);

console.log("Title of prod2:", prod2.title);
console.log("On sale status of prod3:", prod3.onsale);
/*6. Programa la impresión en consola del getter de prod4. */
console.log(prod4.getSupplier);

/*7. Abre con live server el archivo index.html y verifica las salidas programadas */
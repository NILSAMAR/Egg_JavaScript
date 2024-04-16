//29.  Actividad: Calculando el total a pagar por una compra
//4. En el archivo "index.js", declara la variable "totalApagar" para utilizar como contador de la compra de productos. Por ejemplo:
let totalApagar = 0;
//no const
//1. Luego define una iteración para:
//Pedir el nombre del producto y guardarlo en una variable.
//const nombreProducto = (prompt("¿Cual es el nombre del producto?"));
//Pedir la cantidad comprada del producto y guardarlo en una variable.
const cantidad = Number(prompt("¿Cual es la cantidad comprada?"));

//Pedir el precio del producto y guardarlo en una variable.
//const precioProducto = Number(prompt("¿Cual es el precio del producto?"));
//Calcular el subtotal multiplicando la cantidad por el precio.
//const subtotal = cantidadComprada*precioProducto;
//Sumar el subtotal a la variable "totalApagar".
//const sumar = subtotal + totalApagar;

for (let index = 1; index <= cantidad; index++) {
    const nombre = prompt("¿Qué producto desea llevar?");
    const cantidad = Number(prompt("¿Cuántas unidades?"));
    const precio = Number(prompt("¿Cuánto sale cada unidad?"));
    const subtotal = cantidad * precio;
    totalApagar = totalApagar + subtotal;
}
//1.Programa una impresión en la consola que muestre un mensaje con el resultado de la sumatoria.
console.log("El resultado del subtotal es:", totalApagar);
alert(totalApagar);

// const resultado = "Numero de unidades a llevar: " +cantidad  +"Producto que deseas llevar " +fraseMayusculas;
// console.log(resultado);
// alert(resultado);


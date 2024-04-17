/*---------------------------------------------------------------------*/
/*29. Actividad: Calculando el total a pagar por una compra*/
/*---------------------------------------------------------------------*/
/*OBJETIVO:En esta actividad, desarrollarás un programa para calcular el total a pagar 
por una compra de 3 productos. Sigue estos pasos:
*/

/*
//DECLARA VARIABLE
1. En el archivo "index.js", declara la variable "totalApagar" para utilizar como 
contador de la compra de productos. Por ejemplo:*/
let totalApagar = 0

/*
//FUNCION FOR
2. Luego define una iteración para:
-Pedir el nombre del producto y guardarlo en una variable.
-Pedir la cantidad comprada del producto y guardarlo en una variable.
-Pedir el precio del producto y guardarlo en una variable.
-Calcular el subtotal multiplicando la cantidad por el precio.
-Sumar el subtotal a la variable "totalApagar".
*/
const cantidad = Number(prompt("¿cuantas unidades?"));

for (let index = 1; index <= cantidad; index++) {
    const nombre = prompt("¿Qué producto desea llevar?");
    const cantidad = Number(prompt("¿Cuántas unidades?"));
    const precio = Number(prompt("¿Cuánto sale cada unidad?"));
    const subtotal = cantidad * precio;
    totalApagar = totalApagar + subtotal;
}

//IMPRENSION EN CONSOLA
/*
3.Programa una impresión en la consola que muestre un mensaje con el resultado de la sumatoria.*/
console.log("El total a pagar" + totalApagar);

//IMPRENSION EN CONSOLA
//MOSTRAR ALERTA
// Mostrar alerta con la velocidad1
alert("El total a pagar: " + totalApagar); //añadido

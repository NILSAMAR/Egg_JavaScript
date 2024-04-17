/*-----------------------------------------------------------------------
30. Actividad: Cálculo del total de compras diarias 
OBJETIVO:En esta actividad, mejorarás el programa store de la sección 2 para simular una caja registradora y 
registrar la compra de tres clientes que adquieren tres productos cada uno en un día. Al final 
del día, la caja registradora debe mostrar el monto total facturado. Sigue estos pasos:*/

//FUNCION
//2. En el archivo "index.js", encapsula la iteración dentro de una función para que se 
//pueda ejecutar una vez por cada cliente. Por ejemplo:
const comprar = () => {
    //Esto define una función llamada comprar utilizando una arrow function (=>). 
    //Esta función se encarga de simular una compra en una tienda.
    let totalApagar = 0
    for (let index = 1; index <= 3; index++) {
        //el bucle for se ejecutará tres veces, simulando tres productos diferentes que se van a comprar.
        //index es el contador del bucle y se utiliza para llevar la cuenta de las iteraciones.
        const nombre = (prompt("¿Qué producto desea llevar?"));
        //Se muestra un cuadro de diálogo (prompt) al usuario pidiéndole el nombre del producto que desea comprar. 
        //La respuesta se guarda en la variable nombre.
        const cantidad = Number(prompt("¿Cuántas unidades?"));
        //Se muestra otro cuadro de diálogo pidiéndole al usuario la cantidad de unidades del producto que desea comprar. 
        //La respuesta se convierte a un número utilizando Number() y se guarda en la variable cantidad.
        const precio = Number(prompt("¿Cuánto sale cada unidad?"));
        //Similar al paso anterior, se pide al usuario el precio de cada unidad del producto y se guarda en 
        //la variable precio después de convertirlo a número.
        const subtotal = cantidad * precio;
        totalApagar = totalApagar + subtotal;
        //Se agrega el subtotal al total a pagar acumulado en la variable totalApagar.
        console.log("Llevarás " + nombre + " un total de " + cantidad + " a " + precio);
    }
    console.log(totalApagar);
    //Se imprime en la consola del navegador el total a pagar por los productos comprados en esta iteración del bucle.
    return totalApagar;
    //La función comprar devuelve el total a pagar por los productos comprados en esta iteración.
}
//3. Suma los totales de cada cliente. Puedes hacerlo como se muestra a continuación:
const total1 = comprar();
const total2 = comprar();
const total3 = comprar();
//Las siguientes líneas de código llaman a la función comprar tres veces (simulando tres clientes diferentes) y 
//almacenan los resultados en las variables total1, total2 y total3.
const total = total1 + total2 + total3;
//const total = total1 + total2 + total3;: Se calcula el total de todas las compras sumando los totales de cada cliente.


//4. O puedes hacerlo directamente de la siguiente manera:
//const total = comprar() + comprar() + comprar();
//5. Al finalizar, imprime en la consola el total registrado.
console.log("El total 1 es:", total1);
console.log("El total 1 es:", total2);
console.log("El total 1 es:", total3);
console.log("El resultado del subtotal es:", total);
alert(total);
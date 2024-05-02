let totalApagar = 0
let totalProducto = Number(prompt("¿Cuantos productos deseas llevar?"))//4


for (let index = 1; index <= totalProducto; index++) {
    const nombre = prompt("¿Qué producto desea llevar?");
    const cantidad = Number(prompt("¿Cuántas unidades?"));
    const precio = Number(prompt("¿Cuánto sale cada unidad?"));
    const subtotal = cantidad * precio;
    totalApagar = totalApagar + subtotal;
    console.log(" Has llevado: " + cantidad + " unidades de " + nombre + " que costaron " + precio)
}

console.log(totalApagar);
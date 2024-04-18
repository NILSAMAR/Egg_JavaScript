/*-----------------------------------------------------------------------
31. Video: Objetos */
/*-----------------------------------------------------------------------*/
/*En resumen, este código define un objeto producto representando un celular, 
agrega algunas propiedades adicionales, luego elimina algunas propiedades y finalmente 
imprime el objeto en diferentes estados en la consola.*/


//Definir variable producto1
const producto = {
    nombre: "celular",
    precio: 100000,
    stock: 2,
};
/*NOTA:Esto define un objeto producto con tres propiedades: nombre, precio y stock, 
que representan el nombre del producto, su precio y la cantidad en stock respectivamente.
console.log(producto);*/


//IMPRESION EN CONSOLA
/*3. Programa la impresión en consola de producto1. */
console.log(producto);

//
producto.id = "00112233abcde"//
producto.foto = "https://i.postimg.cc/Jn2C5W84/galaxy1.webp"
producto["detalle"] = "escribir el detalle del celular"//te ayuda para llamarlo conmo string
producto["color"] = "gris"

console.log(producto);


//delete producto["id"]
//delete producto.detalle

//console.log(producto.nombre);
//console.log(producto["foto"]);



/*4. Programa la impresión de la propiedad nombre de producto1*/
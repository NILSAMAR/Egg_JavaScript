/*-----------------------------------------------------------------------
31. Video: Objetos */
/*-----------------------------------------------------------------------*/
//Definir variable producto1
const producto = {
    nombre: "celular",
    precio: 100000,
    stock: 2
    };

//IMPRESION EN CONSOLA
/*3. Programa la impresión en consola de producto1. */
console.log(producto);

producto.id = "00112233abcde"
producto.foto = "https://i.postimg.cc/Jn2C5W84/galaxy1.webp"
producto["detalle"] = "escribir el detalle del celular"
producto["color"] = "gris"

console.log(producto);

delete producto["id"]
delete producto.detalle 

console.log(producto);



/*4. Programa la impresión de la propiedad nombre de producto1*/
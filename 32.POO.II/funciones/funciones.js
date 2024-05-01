//FUNCIONES DE ORDEN SUPERIOR: //!Es una funcion que recibe como resultado otra funcion
const nombres = ["Abel", "Carlos", "Carla", "Camila", "Belen"];


//ForEach
nombres.forEach(cadaElemento => console.log(cadaElemento))

nombres.forEach(cadaElemento => {
    console.log(cadaElemento)
    console.log(cadaElemento + " es miembro de EGG")
})

//!Si quiero acumular todo en una variable , creo una variable

let cadena = " ";

nombres.forEach(cadaElemento => {
    console.log(cadaElemento)
    const frase = cadaElemento + " es miembro de EGG; ";
    cadena = cadena + frase;
})
console.log(cadena);


//MAP //!Transformar cada uno de los elementos
const nombresTransformados = nombres.map(cadaElemento => {
    cadaElemento = cadaElemento.toUpperCase();
    cadaElemento = " Miembro de Egg: " + cadaElemento;
    return cadaElemento;

})

console.log(nombresTransformados);

//FILTER: //!Para filtrar

const filtrado = nombres.filter((cadaElemento) => cadaElemento.includes("Ca"));
console.log(filtrado);
const filtrado1 = nombres.filter((cadaElemento) => cadaElemento.includes("Be"));
console.log(filtrado1);
const filtrado2 = nombres.filter((cadaElemento) => cadaElemento.includes("mi"));
console.log(filtrado2);
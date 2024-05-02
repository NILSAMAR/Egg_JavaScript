const h2Tag = document.createElement("h2")

h2Tag.textContent = "ESTE ES EL SUBTITULO"
h2Tag.style.height = "100px"
h2Tag.style.width = "600px"
h2Tag.style.color = "white"
h2Tag.style.background = "gray"
h2Tag.style.fontSize = "30px"
h2Tag.style.padding = "20px"
h2Tag.style.margin = "50px 0"
h2Tag.style.display = "flex"
h2Tag.style.justifyContent = "center"
h2Tag.style.alignItems = "center"

const preSelector = document.querySelector("#subtitulo")
preSelector.appendChild(h2Tag)

const productos = ["Celular", "Tablet", "Calculadora"]

//PRODUCTS 1

products1Sel = document.querySelector("#products1");//ID

for (let producto of productos) { //personalizar cada etiqueta
    const h3Tag = document.createElement("h3");
    h3Tag.style.backgroundColor = "yellow";
    h3Tag.style.padding = "10px";
    h3Tag.style.margin = "10px";
    h3Tag.textContent = producto;
    products1Sel.appendChild(h3Tag);//como hijo
}

const objetos = [ //los productos son objetos
    { nombre: "celular", precio: 100 },
    { nombre: "tablet", precio: 100 },
    { nombre: "computadora", precio: 100 },
];


//PRODUCTS 2
const products2Sel = document.querySelector("#products2");//ID

objetos.forEach(cadaElemento => { //por cada elemento de este array crear la etiqueta h3
    const h3Tag = document.createElement("h3");
    h3Tag.style.backgroundColor = "yellow";
    h3Tag.style.padding = "10px";
    h3Tag.style.margin = "10px";
    h3Tag.textContent = cadaElemento.nombre.toUpperCase() + " - Precio : " + cadaElemento.precio; 
    //concatenar precio
    products2Sel.appendChild(h3Tag);
})
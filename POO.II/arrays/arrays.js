const arreglo = ["primer", 25 , "hola" , { name : "eggsy" } , true];

//ARRAY
const edades = [15,20,30,60,80] //array

console.log("PRIMER ELEMENTO DE UN ARRAY:"+arreglo[0]);
console.log("SEGUNDO ELEMENTO DE UN ARRAY:"+arreglo[1]);
console.log("TERCERO ELEMENTO DE UN ARRAY:"+arreglo[2]);
console.log("CUARTO ELEMENTO DE UN ARRAY:"+arreglo[arreglo.length-1]);

//FOR
for (let i=0; i<=(edades.length - 1); i++) {
    console.log(edades[i]);
    console.log("las edades de las personas son:"+edades[i]);
}
for (let edad of edades) { //por cada uno edad del arreglo de edades hacer algo
    console.log("la edad con for of es:"+edad)
}

for (let cadaElemento of arreglo) { // la sintaxsi es mas facil de imlementar y lo recomeinta
    console.log(cadaElemento);
}
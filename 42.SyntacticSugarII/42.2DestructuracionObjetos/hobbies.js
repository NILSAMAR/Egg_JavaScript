/****************************************
*42.2 ACTIVIDAD: Destructuración de Objetos 
*******************************************************/

/*💧2. Paso 2: Define el JavaScript (hobbies.js)
En este archivo JavaScript, define un objeto con propiedades individuales como enPareja, 
conAmigos y conFamilia, cada una con al menos cinco hobbies
 */

let hobbies = {
    enPareja: ["amar", "querer", "ir al cine", "motivarse", "engreirse"],
    conAmigos: ["jugar play", "ir al cine", "confiarse", "chacota", "pelearse"],
    conFamilia: ["divertirse", "fiesta", "día de la madre", "día del padre", "día del niño"]
};

// Desestructuramos los arrays dentro del objeto hobbies
let { enPareja, conAmigos, conFamilia } = hobbies;

// Extracción y desestructuración de hobbies en los arrays
let [p1, p2, p3, p4, p5] = enPareja;
let [a1, a2, a3, a4, a5] = conAmigos;
let [f1, f2, f3, f4, f5] = conFamilia;

console.log("Los hobbies en pareja son:", p1, ",", p2, ",", p3, ",", p4, ",", p5);
console.log("Los hobbies con los amigos son:", a1, ",", a2, ",", a3, ",", a4, ",", a5);
console.log("Los hobbies con mi familia son:", f1, ",", f2, ",", f3, ",", f4, ",", f5);

/*💧3. Paso 3: Aplica desestructuración de arrays
Extrae el tercer hobby de la lista "enPareja" y el cuarto de la lista "conFamilia".
Guarda estos hobbies en variables separadas.
 */
let [, , hobbyEnPareja] = enPareja;
let [, , , hobbyConFamilia] = conFamilia;
console.log(hobbyEnPareja);
console.log(hobbyConFamilia);

/*💧4. Paso 4: Utiliza un template string para crear un mensaje
El mensaje debe incluir los hobbies seleccionados en el paso anterior.
Formúlalo de manera que explique cuál es tu hobby favorito para hacer en pareja y cuál para hacer en familia.
 */

let mensaje = `Mi hobby favorito para hacer en pareja es "${hobbyEnPareja}" y mi hobby favorito para hacer en familia es "${hobbyConFamilia}".`;
console.log(mensaje);

/*💧5.Paso 5: Manipula el DOM para mostrar el mensaje

Escribe una función que coloque el mensaje dentro del <div> creado en tu archivo HTML.
Llama a esta función al cargar la página para asegurar que el mensaje se muestre cuando se abra el documento.*/

function mostrarMensaje() {
    let mensajeDiv = document.getElementById("hobbies-seleccionados");
    mensajeDiv.textContent = mensaje;
}

document.addEventListener("DOMContentLoaded", mostrarMensaje);
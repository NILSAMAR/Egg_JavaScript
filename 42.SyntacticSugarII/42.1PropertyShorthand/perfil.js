/****************************************
*42.1 ACTIVIDAD: Property Shorthand
*******************************************************/
/*💧1. Paso 1: Definición del Objeto con Property Shorthand
Comienza definiendo las variables que representan los datos personales y físicos. 
Luego, usa la notación de property shorthand para crear un objeto que las contenga. 
Este objeto debería tener también subpropiedades para organizar mejor la información.
 */
/*💧2. Paso 2: Uso del Objeto en HTML
Utiliza el objeto en un archivo HTML para mostrar la información. Aquí tienes un ejemplo 
de cómo podrías estructurar el HTML para incluir puntos de inserción específicos donde se mostrarán los datos:
 */
/*💧3. Paso 3: Implementación de Condiciones y Operadores
En tu archivo JavaScript, implementa las condiciones necesarias usando operadores lógicos. 
Por ejemplo, puedes verificar si la persona es mayor de edad para mostrar cierta información adicional o restringir otras.*/

/*💧4. Paso 4: Verificación de Impresión y Funcionalidades
Finalmente, asegúrate de que toda la información se muestra correctamente en el navegador. 
Esto incluye verificar que los datos personales y físicos se presenten como se espera y que 
las condiciones aplicadas funcionen adecuadamente. */

const nombre = "Carlos";
const edad = 30;
const correo = "ing.gonzales96@gmail.com";
const altura = 156;
const peso = 53;

// Uso de property shorthand para crear el objeto
const persona = { nombre, edad, correo, altura, peso };

// Función para mostrar los datos en el HTML
function mostrarDatos() {
    document.getElementById("nombre").textContent = persona.nombre;
    document.getElementById("edad").textContent = persona.edad;
    document.getElementById("correo").textContent = persona.correo;
    document.getElementById("altura").textContent = persona.altura;
    document.getElementById("peso").textContent = persona.peso;

    // Condición para verificar si la persona es mayor de edad
    let mensaje = persona.edad >= 18 ? "Eres mayor de edad." : "Eres menor de edad.";
    document.getElementById("mensaje").textContent = mensaje;
}

document.addEventListener("DOMContentLoaded", mostrarDatos);

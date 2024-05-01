/*-----------------------------------------------------------------------
32.5  Actividad: Cálculos con Math
/*-----------------------------------------------------------------------*/
/*OBJETO: En esta actividad, desarrollarás un programa similar al anterior para calcular el total a pagar por una compra de 5 productos. Sigue estos pasos: */
/**
🍁Desde Visual Studio Code, abre la carpeta example desarrollada en secciones anteriores.
🍁Crea un nuevo script math.js
🍁Comenta los otros scripts y conectar math.js con index.html del proyecto example
🍁Define una función palindrome que pruebe los siguientes métodos:
Math.abs(x)
Math.ceil(x)
Math.floor(x)
Math.round(x)
Math.max(x1, x2, ..., xn)
Math.min(x1, x2, ..., xn)
Math.random()
🍁Agrega las impresiones que creas convenientes para observar los resultados.
🍁Abre con live server el archivo index.html y verifica las salidas programadas.
 */

function palindrome() {
    console.log("Probando métodos de Math");

    // Prueba de Math.abs
    const negativo = -15;
    console.log(`Math.abs(${negativo}): ${Math.abs(negativo)}`);

    // Prueba de Math.ceil
    const numDecimal1 = 2.3;
    console.log(`Math.ceil(${numDecimal1}): ${Math.ceil(numDecimal1)}`); // Redondea hacia arriba

    // Prueba de Math.floor
    const numDecimal2 = 3.8;
    console.log(`Math.floor(${numDecimal2}): ${Math.floor(numDecimal2)}`); // Redondea hacia abajo

    // Prueba de Math.round
    const numDecimal3 = 2.5;
    console.log(`Math.round(${numDecimal3}): ${Math.round(numDecimal3)}`); // Redondea al entero más cercano

    // Prueba de Math.max
    console.log(`Math.max(10, 20, 30, 40, 50): ${Math.max(10, 20, 30, 40, 50)}`); // Devuelve el máximo

    // Prueba de Math.min
    console.log(`Math.min(10, 20, 30, 40, 50): ${Math.min(10, 20, 30, 40, 50)}`); // Devuelve el mínimo

    // Prueba de Math.random
    const randomValue = Math.random();
    console.log(`Math.random(): ${randomValue}`);
}

palindrome(); // Ejecuta la función para probar los métodos de Math
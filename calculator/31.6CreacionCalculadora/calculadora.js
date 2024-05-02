/*-----------------------------------------------------------------------
32.6  Actividad Complementaria: Creando una Calculadora
/*-----------------------------------------------------------------------*/
/*OBJETO: En esta actividad, desarrollarás una calculadora básica con las operaciones 
de suma, resta, multiplicación, división, potencias, raíz cuadrada, raíz cúbica. 
Para este ejercicio tienes que seguir los siguientes pasos: */
/**
🍁Desde Visual Studio Code, abre la carpeta calculator desarrollada en secciones anteriores.
🍁Crea un nuevo script calculator.js
🍁Comenta los otros scripts y conectar math.js con index.html del proyecto calculator.
🍁Define la clase de la calculadora: Esto incluirá la estructura de la calculadora y los métodos para realizar las operaciones.
🍁Crea una función de inicialización para configurar la calculadora y vincular los eventos.
🍁Agrega las impresiones que creas convenientes para observar los resultados.
🍁Abre con live server el archivo index.html y verifica las salidas programadas.
 */

/*
🍁Clase Calculator
Métodos:
- sumar(a, b): Devuelve la suma de a y b.
-restar(a, b): Devuelve la resta de a y b.
-multiplicar(a, b): Devuelve el producto de a y b.
-dividir(a, b): Devuelve el resultado de dividir a por b. Si b es cero, devuelve un mensaje de error.
-potencia(base, exponente): Devuelve el resultado de elevar base al exponente usando Math.pow.
-raizCuadrada(a): Devuelve la raíz cuadrada de a usando Math.sqrt.
-raizCubica(a): Devuelve la raíz cúbica de a usando Math.cbrt.

🍁Función startCalculator
- Objetivo: Pedir al usuario elegir una operación y luego ejecutar esa operación con valores introducidos por el usuario.
🍁Flujo:
-Creación del objeto: Crea un objeto calculator de la clase Calculator para acceder a sus métodos.
-Elegir operación: Usa prompt para pedir al usuario que elija una operación entre sumar, restar, multiplicar, dividir, potencia, 
raíz cuadrada y raíz cúbica.
-Ejecutar operación:
***Dependiendo de la operación seleccionada, solicita uno o dos números al usuario y 
***llama al método correspondiente de Calculator.
***Usa parseFloat para convertir las entradas a números decimales.
***Al realizar la división, comprueba si el divisor es cero para evitar errores.
Mostrar resultado: Muestra el resultado de la operación seleccionada con un alert.
Manejo de operaciones desconocidas: Si el usuario introduce un valor que no corresponde a ninguna operación conocida, muestra un mensaje de error. */



// Clase que define varias operaciones matemáticas
class Calculator {
    // Método para sumar dos números
    sumar(a, b) {
        return a + b; // Retorna la suma de a y b
    }

    // Método para restar dos números
    restar(a, b) {
        return a - b; // Retorna la resta de b desde a
    }

    // Método para multiplicar dos números
    multiplicar(a, b) {
        return a * b; // Retorna el producto de a y b
    }

    // Método para dividir dos números
    dividir(a, b) {
        if (b === 0) { // Verifica si el divisor es cero
            return "Error: División por cero"; // Retorna un mensaje de error
        }
        return a / b; // Retorna la división de a entre b
    }

    // Método para calcular la potencia
    potencia(base, exponente) {
        return Math.pow(base, exponente); // Calcula base elevado al exponente
    }

    // Método para calcular la raíz cuadrada
    raizCuadrada(a) {
        return Math.sqrt(a); // Retorna la raíz cuadrada de a
    }

    // Método para calcular la raíz cúbica
    raizCubica(a) {
        return Math.cbrt(a); // Retorna la raíz cúbica de a
    }
}

// Función que inicia la calculadora y ejecuta la operación seleccionada por el usuario
function startCalculator() {
    // Crea un nuevo objeto de la clase Calculator para usar sus métodos
    const calculator = new Calculator();

    // Solicita al usuario que elija una operación
    const operation = prompt("Elige una operación (sumar, restar, multiplicar, dividir, potencia, raiz cuadrada, raiz cubica):");

    let result; // Variable para almacenar el resultado de la operación

    // Compara la operación elegida por el usuario y ejecuta la correspondiente
    if (operation === 'sumar') {
        // Si elige sumar, pide dos números y los suma
        const num1 = parseFloat(prompt("Ingresa el primer número:")); // Convierte el input a número decimal
        const num2 = parseFloat(prompt("Ingresa el segundo número:"));
        result = calculator.sumar(num1, num2); // Llama al método sumar
    } else if (operation === 'restar') {
        const num1 = parseFloat(prompt("Ingresa el primer número:"));
        const num2 = parseFloat(prompt("Ingresa el segundo número:"));
        result = calculator.restar(num1, num2); // Llama al método restar
    } else if (operation === 'multiplicar') {
        const num1 = parseFloat(prompt("Ingresa el primer número:"));
        const num2 = parseFloat(prompt("Ingresa el segundo número:"));
        result = calculator.multiplicar(num1, num2); // Llama al método multiplicar
    } else if (operation === 'dividir') {
        const num1 = parseFloat(prompt("Ingresa el primer número:"));
        const num2 = parseFloat(prompt("Ingresa el segundo número:"));
        result = calculator.dividir(num1, num2); // Llama al método dividir
    } else if (operation === 'potencia') {
        const base = parseFloat(prompt("Ingresa la base:")); // Pide la base
        const exponente = parseFloat(prompt("Ingresa el exponente:")); // Pide el exponente
        result = calculator.potencia(base, exponente); // Llama al método potencia
    } else if (operation === 'raiz cuadrada') {
        const num = parseFloat(prompt("Ingresa el número:")); // Pide el número para la raíz cuadrada
        result = calculator.raizCuadrada(num); // Llama al método raizCuadrada
    } else if (operation === 'raiz cubica') {
        const num = parseFloat(prompt("Ingresa el número:")); // Pide el número para la raíz cúbica
        result = calculator.raizCubica(num); // Llama al método raizCubica
    } else {
        // Si la operación no es reconocida, muestra un mensaje de error
        result = "Operación desconocida";
    }

    // Muestra el resultado al usuario
    alert(`El resultado es: ${result}`);
}

// Inicia la calculadora llamando a startCalculator
startCalculator();


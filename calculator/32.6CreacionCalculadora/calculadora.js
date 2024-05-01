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

//CLASE CALCULATOR
class calculator {
    constructor(suma, resta, multiplicacion, division, potencias, raizcuadrada, raizcubica) {
        this.suma = this.suma; // numerico
        this.resta= this.resta; // numerico
        this.multiplicacion = this.multiplicacion; // numerico
        this.division= this.division; // numerico
        this.potencias = this.potencias; // numerico
        this.raizcuadrada = this.raizcuadrada; // numerico
        this.raizcubica = this.raizcubica; // numerico
    }
}

function inicializadorCalculator() {
    const numero1 = 10//Define una variable para la distancia
    const numero2 = 2//Define una variable para el tiempo
}
//INSTANCIAS
const prod1 = new calculator([numero1,numero2],[numero1,numero2]);

//PRODUCTOS
console.log(prod1);


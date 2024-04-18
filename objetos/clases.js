//RESUMEN
//clase conjunto de objetos
///constructor
////metodos (comer.comprar,manejar,etc)

class Persona { //Por convencion inician con mayuscula la clase *Revisarlo
    constructor(nombre,vida) { 
        this.nombre 
        this.vida
    }
    comer(cantidad) {//cumple cierta accion
        this.vida = this.vida + cantidad
        console.log("la vida de:" + this.nombre +"acaba de aumentar a  " + this.vida );
    }
}
//definamos una instantia

const juan = new Persona ("juan",100) //new palabra para la persona
const martha = new Persona ("martha",120)


console.log(juan);
console.log(martha);

//uso los metodos
juan.comer(10)
juan.comer(50)
juan.comer(5)
juan.comer(30)



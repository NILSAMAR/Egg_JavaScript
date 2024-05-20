let isOnline = false;
let entrada = prompt('Estas conectado? Escribe "SI" o "NO"')
let respuesta = entrada ?? "No hay valor";
if (respuesta.toUpperCase() == "SI" || respuesta.toUpperCase() == "NO") {
    if (respuesta.toUpperCase() == "SI" && isOnline === false) {
        isOnline = true;
        if (isOnline) {
            let hobby = "programar", nombre = "Jeronimo", ubicacion = "Bogota";
            alert("Usuario conectado");
            console.log(`Hola ${nombre} como esta el clima hoy en ${ubicacion}, espero estes disfrutando de ${hobby} el dia de hoy`);
        } else {
            alert("El usuario no esta conectado")
        }
    } else {
        alert("has decidido no conectarte")
    }
}else{
    alert(`${respuesta}`);
}
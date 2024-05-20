/*-----------------------------------------------------------------------
41.3. ✏️ Actividad: Implementando el Encadenamiento opcional
/*-----------------------------------------------------------------------*/
/*PASOS:
💧1. Prepara el Archivo HTML:
🌍Crea un archivo HTML llamado perfil.html.
🌍Añade un elemento div con el id perfil donde se mostrará la información del usuario.
🌍Incluye un archivo JavaScript script.js en tu HTML.

💧2. Crea el Script JavaScript:
🌍Abre el archivo script.js.
🌍Define un objeto llamado misDatosFisicos con las siguientes propiedades: nombre, edad, dirección (que será otro objeto con calle, número y ciudad), altura, peso y hobby.

💧3. Manipula el DOM para Mostrar Datos:
🌍Utiliza document.getElementById para acceder al contenedor div con id perfil.
🌍Crea una variable contenidoPerfil y usa template strings para incluir los datos del objeto en HTML.
🌍Utiliza operadores lógicos para gestionar valores no especificados. Como el operador ternario o el operador lógico or (||)
🌍Asigna el HTML generado a innerHTML del contenedor perfil.
Una vez finalizado, deberás visualizar los datos en pantalla como en el siguiente ejemplo
*/
const misDatosFisicos = {
    nombre: "Carlos",
    edad: 32,
    dirección: {
        calle: "Calle Mayor",
        número: 123,
        ciudad: "Madrid"
    },
    altura: 1.75, // en metros
    peso: 70,     // en kilogramos
    hobby: "Leer libros"
};

// Obtener el contenedor div con el id 'perfil'
const contenedorPerfil = document.getElementById("perfil");

// Crear el contenido del perfil usando template strings
const contenidoPerfil = `
    <h2>Datos Físicos</h2>
    <p>Nombre: ${misDatosFisicos.nombre || "No especificado"}</p>
    <p>Edad: ${misDatosFisicos.edad || "No especificado"}</p>
    <p>Dirección: ${misDatosFisicos.dirección.calle || "No especificado"} ${misDatosFisicos.dirección.número || ""}, ${misDatosFisicos.dirección.ciudad || "No especificado"}</p>
    <p>Altura: ${misDatosFisicos.altura || "No especificado"} m</p>
    <p>Peso: ${misDatosFisicos.peso || "No especificado"} kg</p>
    <p>Hobby: ${misDatosFisicos.hobby || "No especificado"}</p>
`;

// Asignar el contenido HTML al contenedor 'perfil'
contenedorPerfil.innerHTML = contenidoPerfil;

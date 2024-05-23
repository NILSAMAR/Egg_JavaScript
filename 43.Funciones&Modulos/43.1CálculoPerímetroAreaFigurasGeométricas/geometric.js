//*-----------------------------------------------------------------------
//*43.1. ✏️  Actividad: Cálculo del perímetro y área de figuras geométricas
//*-----------------------------------------------------------------------*/
//? PASOS: 

//?💧1. Crea un nuevo proyecto llamado "geometric " en tu carpeta de curso y agrega un archivo "geometric.js".
//?💧2. Define la estructura básica del archivo HTML con las etiquetas <nav>, <main> y <footer>, y asegúrate de conectar correctamente el script "geometric.js".*/
//?💧3. En el archivo "geometric.js", define tres objetos que representen rectángulos, cada uno con propiedades de altura y ancho. */
const rect1 = { ancho: 4, altura: 5 };
const rect2 = { ancho: 7, altura: 3 };
const rect3 = { ancho: 6, altura: 6 };

//?💧4. Desarrolla las funciones "perímetro" y "área" para calcular los valores correspondientes del perímetro y área de cada rectángulo. */
function perimetro(rect) {
    return 2 * (rect.ancho + rect.altura);
}

function area(rect) {
    return rect.ancho * rect.altura;
}

//?💧5. Imprime en la vista una tabla que muestre los datos de cada rectángulo, junto con los resultados del perímetro y área.
const rectangulos = [rect1, rect2, rect3];
const tableBody = document.getElementById('table-body');

rectangulos.forEach((rect, index) => {
    const row = document.createElement('tr');

    const rectName = document.createElement('td');
    rectName.textContent = `Rectángulo ${index + 1}`;

    const rectAncho = document.createElement('td');
    rectAncho.textContent = rect.ancho;

    const rectAltura = document.createElement('td');
    rectAltura.textContent = rect.altura;

    const rectPerimetro = document.createElement('td');
    rectPerimetro.textContent = perimetro(rect);

    const rectArea = document.createElement('td');
    rectArea.textContent = area(rect);

    row.appendChild(rectName);
    row.appendChild(rectAncho);
    row.appendChild(rectAltura);
    row.appendChild(rectPerimetro);
    row.appendChild(rectArea);

    tableBody.appendChild(row);
});

//?💧6. Finalmente, verifica que la vista se imprima correctamente y que los cálculos sean precisos.


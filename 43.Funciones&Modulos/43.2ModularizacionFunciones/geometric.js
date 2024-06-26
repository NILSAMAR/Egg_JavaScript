//*-----------------------------------------------------------------------
//*43.2. ✏️ Actividad: Modularización de funciones
//*-----------------------------------------------------------------------*/
//? PASOS: 

//?💧1. Modifica el proyecto "geometric " para que las funciones desarrolladas para el perímetro y  área trabajen en archivos separados como módulos.
//?💧2. Crea archivos separados para cada función, por ejemplo, "perimeter.js", "area.js" .
//?💧3. En "geometric.js", importa los módulos de las funciones utilizando la declaración import.

// geometric.js
import { perimetro } from './perimeter.js';
import { area } from './area.js';

const rect1 = { ancho: 4, altura: 5 };
const rect2 = { ancho: 7, altura: 3 };
const rect3 = { ancho: 6, altura: 6 };

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

//?💧4. Asegúrate de que el tipo de script se establezca como "module" en todos los archivos.
//?💧5. Finalmente, verifica que la vista se imprima correctamente y que las funciones importadas funcionen según lo esperado.

/*
geometric/
│
├── area.js
├── geometric.js
├── index.html
└── perimeter.js
 */


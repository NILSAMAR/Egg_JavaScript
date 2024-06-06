// geometric.js
import { rectangulos } from './rectangleData.js';
import { perimetro } from './perimeter.js';
import { area } from './area.js';

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


/**
geometric/
│
├── area.js
├── geometric.js
├── index.html
├── perimeter.js
└── rectangleData.js

 */
































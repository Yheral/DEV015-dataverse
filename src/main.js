import {data} from './dataset.js';
import {renderItems} from './view.js';

//NOTA DE ERROR no usaste {} para el import dentro
const mainContainer = document.getElementById("root")
mainContainer.appendChild(renderItems(data))
console.log(data, renderItems(data), data);

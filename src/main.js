import data from './data/dataset.js';
import {renderItems} from './view.js';

//NOTA DE ERROR no usaste {} para el import dentro
const mainContainer = document.getElementById("root")
mainContainer.appendChild(renderItems(data));
//console.log(data, renderItems(data), data);

const selectElement=document.getElementById("org-select");
data.forEach(org=>{
  const option= document.createElement("option");
  option.value=org.id;
  option.textContent=org.name;
  selectElement.appendChild(option);
}
);
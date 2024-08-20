import data from './data/dataset.js';
import {renderItems} from './view.js';
import { filterData,sortData} from './dataFunctions.js'; //importamos para la función de filtro, puede importar dos cosas del mismo archiv 
import { compuStats } from './dataFunctions.js'; //??

const mainContainer = document.getElementById("root");
const selectElement = document.getElementById("org-select");
const sortSelectElement=document.getElementById("sort-select");
const compuStats=document.getElementById("calcular");??

// Renderiza todos los elementos al cargar la página
mainContainer.appendChild(renderItems(data));

//NOTA DE ERROR: despues de EventListener, no va =

// Evento para filtrar y ordenar según la selección
const updateItems = () => {
  const selectId=selectElement.value;
  const sortOrder=sortSelectElement.value;
  //FILTRO
  const filteredData=filterData(data,"id",selectId);

  //ORDEN: Obtiene el valor de orden (asc o desc) del desplegable de ordenación
  const sortedData=sortData(filteredData,"name",sortOrder);//orderar asc y desc

  mainContainer.innerHTML="";
  mainContainer.appendChild(renderItems(sortedData));
};
selectElement.addEventListener("change",updateItems)
sortSelectElement.addEventListener("change",updateItems) 
compuStatsElement.addEventListener("click";()=>{
  const stats=compuStats(data);
});

data.forEach(org=>{
  const option= document.createElement("option");
  option.value=org.id;
  option.textContent=org.name;
  selectElement.appendChild(option);
});


/*searchInput.addEventListener("input",()=>{
  const searchValue = searchInput.value.trim();
  const filteredData=filterData(data,"name",searchValue);
  console.log(filteredData);*/
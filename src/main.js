import data from './data/dataset.js';
import {renderItems} from './view.js';
import { filterData,sortData,filterOds,filterYear, filterRegion,compuStats} from './dataFunctions.js'; //importamos para la función de filtro, puede importar dos cosas del mismo archiv 

const mainContainer = document.querySelector("#root");
const selectElement = document.querySelector("#org-select");
const sortSelectElement = document.querySelector("#sort-select");
const odsSelectElement = document.querySelector("#ods-select");
const yearSelectElement=document.querySelector("#year-select");
const regionSelectElement=document.querySelector("#region-select");

mainContainer.appendChild(renderItems(data)); // Renderiza todos los elementos al cargar la página

const updateItems = () => {
  const selectId = selectElement.value;
  const sortOrder = sortSelectElement.value;
  const odsValue = odsSelectElement.value;
  const yearValue=yearSelectElement.value;
  const regionValue=regionSelectElement.value;

  //----------------------FILTRO-------------------------------
  //FILTRO POR ID
  let filteredData = selectId ==="all" ? data: filterData(data,"id",selectId);

  //FILTRO ODS
  if (odsValue !=="all") {
    filteredData = filterOds(filteredData,"ODS de mayor identificación",odsValue);
  }

  //FILTRO POR AÑO
  if(yearValue !=="all") {
    filteredData=filterYear(filteredData,yearValue);

  }

  //FILTRO POR REGION
  if(regionValue !=="all") {
  //NOTA DE ERRROR, pusiste filterData..cuando tenias que poner filterRegion..la función que le corresponde datafunctions.
    filteredData=filterRegion(filteredData,regionValue);
  }

  //-------------------------------ORDEN--------------------------------------------   //Obtiene el valor de orden (asc o desc) del desplegable de ordenación
  const sortedData=sortOrder==="all"? filteredData: sortData (filteredData,"id",sortOrder);//orderar asc y desc

  //---------------------------ESTADISTICAS-------------------------------
  const totalFilteredOrgs=compuStats(sortedData);
  const totalCountElement=document.getElementById("stats1");
  totalCountElement.textContent="Cantidad de organizaciones filtradas: "+ totalFilteredOrgs;


  mainContainer.innerHTML="";
  mainContainer.appendChild(renderItems(sortedData));
};

selectElement.addEventListener("change",updateItems);
sortSelectElement.addEventListener("change",updateItems);
odsSelectElement.addEventListener("change",updateItems);
yearSelectElement.addEventListener("change",updateItems);
regionSelectElement.addEventListener("change",updateItems);

//-------------------BOTON LIMPIAR-----------------
const resetbutton=document.getElementById("reset-button");
resetbutton.addEventListener("click",() => {
  selectElement.value="all";
  sortSelectElement.value="all";
  odsSelectElement.value="all";
  yearSelectElement.value="all";
  regionSelectElement.value="all";
  updateItems();  // Actualiza la vista después de restablecer los valores.
});

data.forEach(org=>{
  const option= document.createElement("option");
  option.value=org.id;
  option.textContent=org.name;
  selectElement.appendChild(option);
});

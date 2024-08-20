import data from './data/dataset.js';
/*export const data = {
  if (!Array.isArray(data)){
    return data;
    }
    else {
      return [];
    }
  };*/
// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const filterData = (data,filterBy,value) => {
  return data.filter(item =>item[filterBy]===value);
};

export const sortData = (data,sortBy,sortOrder) => {
// Hacemos una copia de los datos para no cambiar los originales
  return data.sort((a,b)=>{
  // Comparamos dos cartas o tarjetas
    if(a[sortBy] < b[sortBy]) {
    // Si queremos ascendente y la carta a es menor, a va primero
      return sortOrder === 'asc' ? -1 : 1; //ternario
    }
    if(a[sortBy] > b[sortBy]) {
      return sortOrder === 'desc' ? 1 : -1; //ternario
    }
  });};

export const compuStats = (data) ==> {
function countOrganizations() {
const organizations=document.querySelectorAll(".organizations");
const count=organizations.length;
console.log("CANTIDAD DE ORG",count);
return count;
};

};
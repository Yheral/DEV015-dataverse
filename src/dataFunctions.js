export const filterData = (data,filterBy,value) => {
  return data.filter(item =>item[filterBy]===value);
};
//metodo includes para arreglos
export const sortData = (data,sortBy,sortOrder) => {
// Hacemos una copia de los datos para no cambiar los originales
  return [...data].sort((a,b)=>{
    const valueA = a[sortBy].toString().toLowerCase(); // Convertimos a string y a minúsculas
    const valueB = b[sortBy].toString().toLowerCase(); // Convertimos a string y a minúsculas
    // Comparamos dos cartas o tarjetas
    if(valueA < valueB) {
    // Si queremos ascendente y la carta a es menor, a va primero
      return sortOrder === 'asc' ? -1 : 1; //ternario
    }
    if(valueA > valueB) {
      return sortOrder === 'asc' ? 1 : -1; //ternario
    }

    return 0;
  });
};
export const filterOds = (data,filterBy,value) =>{
  return data.filter(item =>
    item.facts && Array.isArray(item.facts[filterBy]) && item.facts[filterBy].some(ods=>ods.includes(value))
  ); //NOTA DE ERROR: Ods es un sub item en por lo que tienes que especificar donde este item[poner donde esta]
};
export const filterYear = (data,year) => {
  return data.filter(item =>
    item.facts && item.facts["Año de fundación"] === Number(year))
};

export const filterRegion = (data,region) => { 
  return data.filter(item =>
    item.facts && 
    Array.isArray(item.facts["Regiones de impacto"]) &&
    item.facts["Regiones de impacto"].includes(region)
  );  
}
export const compuStats = (data) => {
  const totalOrg=data.reduce((total)=> total + 1,0);
  console.log(totalOrg);
  return totalOrg;
};
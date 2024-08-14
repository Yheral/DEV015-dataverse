export const renderItems = (data) => {
//console.log(data)
  //declaro una constante con metodo del DOM
  const list = document.createElement("ul");
  // Creamos una lista <ul> para poner todos los elementos
  list.setAttribute('itemscope', ''); //// Decimos que esta lista tiene detalles especiales

  data.forEach(element => {
    const listItem = document.createElement("li")
    listItem.setAttribute('itemscope', '');
    
    //Agregamos la información del elemento a <li>
    listItem.innerHTML = `
    <div class="card">
      <img src="${element.imageURL}" alt="${element.name}" itemprop="image">
      <h3 itemprop="name">${element.name}</h3>
      <p itemprop="description">${element.shortDescription}</p>
      <p>Año de fundación: <span itemprop="foundingDate">${element.facts["Año de fundación"]}</span></p>
      <p>ODS de mayor identificación: 
      <span itemprop="identifier">${element.facts["ODS de mayor identificación"].join(', ')}</span>
      </p>
      <p>Regiones de impacto: 
      <span itemprop="region">${element.facts["Regiones de impacto"].join(', ')}</span>
      </p>
      <a href="${element.extraInfo.web}" itemprop="url">Web</a>
      </div>`
    ;
  
    // Añadimos el nuevo <li> a la lista
    list.appendChild(listItem)
  })
  
  // Aquí comienza tu código y puedes retornar lo que tu necesites

  return list;
};

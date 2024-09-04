export const renderItems = (data) => {
  //console.log(data);
  //declaro una constante con metodo del DOM
  const ul = document.createElement("ul");
  // Creamos una lista <ul> para poner todos los elementos

  const listItems = data.map((element)=> {
    const li = document.createElement("li");
    li.setAttribute('itemtype', 'http://schema.org/Organization'); // Agrega el atributo itemtype
    li.setAttribute('itemscope', ''); // Decimos que esta lista tiene detalles especiales

    //Agregamos la información del elemento a <li>
    li.innerHTML = `
    <div class="card">
      <img src="${element.imageURL}" alt="${element.name}" itemprop="image">
      <h3 itemprop="name">${element.name}</h3>
      <p itemprop="description">${element.shortDescription}</p>
      <p> Año de fundación: <span itemprop="foundingDate">${element.facts["Año de fundación"]}</span></p>
      <p> ODS de mayor identificación: 
      <span itemprop="identifier">${element.facts["ODS de mayor identificación"].join(', ')}</span>
      </p>
      <p>Regiones de impacto: 
      <span itemprop="region">${element.facts["Regiones de impacto"].join(', ')}</span>
      </p>
      <a href="${element.extraInfo.web}" itemprop="url">Web</a>
      </div>`
    ;
    return li;
    // Añadimos el nuevo <li> a la lista
  });

  listItems.forEach((li) => ul.appendChild(li));
  return ul;
};

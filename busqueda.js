const inputBusquedaSlctr = document.getElementById('inputBusqueda');

const resultadosSlctr = document.getElementById('resultadosBusqueda');

const btnBusquedaSlctr = document.getElementById('btnBusqueda');

inputBusquedaSlctr.addEventListener('keyup', buscar);

btnBusquedaSlctr.addEventListener('click', buscarOcerrar);

function buscarOcerrar(event){
  console.log(event);
  if(btnBusquedaSlctr.classList.contains('search')){
    let textoBusqueda = inputBusquedaSlctr.value;
    ajaxHandler('https://api.arasaac.org/api/pictograms/es/search/'+textoBusqueda, listarResultados);
  }else if(btnBusquedaSlctr.classList.contains('close')){
    resultadosSlctr.style.display = 'none';
    btnBusquedaSlctr.classList.remove('close');
    btnBusquedaSlctr.classList.add('search');
    btnBusquedaSlctr.innerHTML = `<span class="input-group-text"><i class="fas fa-search"></i></span>`;
  }
}

function buscar(event){
    if(event.keyCode === 13){
        let textoBusqueda = inputBusquedaSlctr.value;
        ajaxHandler('https://api.arasaac.org/api/pictograms/es/search/'+textoBusqueda, listarResultados);
    }
}

function listarResultados(data){
    
    resultadosSlctr.style.display = 'flex';
    let resultadosHTML = "";
    data.forEach(function(element){
        resultadosHTML += renderPicto(element);
    });
    resultadosSlctr.innerHTML = resultadosHTML;
    btnBusquedaSlctr.classList.remove('search');
    btnBusquedaSlctr.classList.add('close');
    btnBusquedaSlctr.innerHTML = `<span class="input-group-text"><i class="fas fa-times text-danger"></i></span>`;
    recalculaAlturaPictogramas();
    //console.log(resultadosHTML);
}

function renderPicto(element){
    console.log(element);
    return `<div id="box-one1" class = "altura pictograma draggable col-md-4">
              <img class = "picto" src="https://api.arasaac.org/api/pictograms/${element.idPictogram}"></img>
              <p class = "picto">${element.keywords[0].keyword}</p>
              <div class = "pictogramaHover"></div>
            </div>`
}

function ajaxHandler (url, cb){
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      cb(data)  
    })
    .catch(function(error) {
      console.log(error)
    });  
}
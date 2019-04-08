const inputBusquedaSlctr = document.getElementById('inputBusqueda');

inputBusquedaSlctr.addEventListener('keyup', buscar);

function buscar(event){
    if(event.keyCode === 13){
        let textoBusqueda = inputBusquedaSlctr.value;
        ajaxHandler('https://api.arasaac.org/api/pictograms/es/search/'+textoBusqueda, listarResultados)
        
    }
}

function listarResultados(data){
    let resultadosSlctr = document.getElementById('resultadosBusqueda');
    resultadosSlctr.style.display = 'flex';
    let resultadosHTML = "";
    data.forEach(function(element){
        resultadosHTML += renderPicto(element);
    });
    resultadosSlctr.innerHTML = resultadosHTML;
    recalculaAlturaPictogramas();
    //console.log(resultadosHTML);
}

function renderPicto(element){
    
    return `<div id="box-one1" class = "altura pictograma draggable col-md-4">
              <img class = "picto" src="https://api.arasaac.org/api/pictograms/${element.idPictogram}"></img>
              <p class = "picto">hola</p>
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
/*
 var text = prompt('dime picto')
        fetch('https://api.arasaac.org/api/pictograms/es/search/'+text.trim())
            .then(res => res.json())
            .then(data => {
                const picto = data[0].idPictogram;
                document.getElementById('img').src = 'https://api.arasaac.org/api/pictograms/'+picto;
            })
            .catch(console.warn)*/
const plantillasPrivadas = [];

const tablerosPrivados = [];

const contentSlctr = document.getElementById("content");

const ref = firebase.database().ref();

const plantillasRef = ref.child("plantillas");

const tablerosRef = ref.child("tableros");

function cargarLocalStorage() {
  plantillasPrivadas.length = 0;
  tablerosPrivados.length = 0;
  for (var i = 0; i < localStorage.length; i++) {
    let elemento = JSON.parse(localStorage.getItem(localStorage.key(i)));
    if (elemento.tipo === "plantilla") {
      plantillasPrivadas.push(elemento);
    } else if (elemento.tipo === "tablero") {
      tablerosPrivados.push(elemento);
    }
  }
}

function listaPlantillasPrivadas() {
  let resultadosHTML = `<div id = "contenidoTabla">
    <div class="row justify-content-end">
      <button class="boton btn btn-primary align-self-center" data-action="exportarPlantillas"><i class="fa fa-download"></i> Exportar Plantillas</button>
      <label class="boton btn btn-primary align-self-center"><i class="fa fa-upload"></i> Importar Plantillas<input id="inputTableros" type="file" style="display: none;"></label>
    </div>`;
  plantillasPrivadas.forEach(function (element) {
    resultadosHTML += `
    <div class="card my-3 h-100" data-id="${element.id}">
        <div class="row h-100">
          <div class="col-md-4 h-100">
            <img src="${element.miniatura}" class="img-fluid d-block">
          </div>
          <div class="col-md-8 px-3">
              <div class="row card-block px-3 justify-content-around" data-id="${element.id}">
                  <h4 class="col-md-12 card-title">${element.titulo}</h4>
                  <button type="button" class="opcion col-md-5 btn btn-outline-primary" data-action="publicar">Publicar</button>
                  <button type="button" class="opcion col-md-5 btn btn-outline-primary" data-action="tablero">Utilizar como tablero</button>
                  <button type="button" class="opcion col-md-5 btn btn-outline-primary" data-action="duplicar">Duplicar</button>
                  <a class="col-md-5 p-0" href="edit.html#${element.id}"><button type="button" class="opcion col-md-12 btn btn-outline-primary" data-action="editar">Editar</button></a>
                  <a class="col-md-5 p-0" href="ver.html#${element.id}"><button type="button" class="opcion col-md-12 btn btn-outline-primary" data-action="editar">Ver</button></a>
                  <button type="button" class="opcion col-md-5 btn btn-outline-primary" data-action="eliminar">Eliminar</button>
              </div>
          </div>
        </div>
      </div>`;
  });
  resultadosHTML += `</div>`;
  contentSlctr.innerHTML = resultadosHTML;
  document.getElementById("contenidoTabla").addEventListener("click", opciones);
  document.getElementById('inputTableros').addEventListener('change', readSingleFile, false);
}

function listaTablerosPrivados() {
  let resultadosHTML = `<div id = "contenidoTabla">
  <div class="row justify-content-end">
    <button class="boton btn btn-primary align-self-center" data-action="exportarTableros"><i class="fa fa-download"></i> Exportar Tableros</button>
    <label class="boton btn btn-primary align-self-center"><i class="fa fa-upload"></i> Importar Tableros<input id="inputPlantillas" type="file" style="display: none;"></label>
  </div>`;
  tablerosPrivados.forEach(function (element) {
    resultadosHTML += `
    <div class="card my-3 h-100" data-id="${element.id}">
        <div class="row h-100">
          <div class="col-md-4 h-100">
            <img src="${element.miniatura}" class="img-fluid d-block">
          </div>
          <div class="col-md-8 px-3">
              <div class="row card-block px-3 justify-content-around" data-id="${
      element.id
      }">
                  <h4 class="col-md-12 card-title">${element.titulo}</h4>
                  <button type="button" class="opcion col-md-5 btn btn-outline-primary" data-action="publicar">Publicar</button>
                  <button type="button" class="opcion col-md-5 btn btn-outline-primary" data-action="duplicar">Duplicar</button>
                  <a class="col-md-5 p-0" href="edit.html#${element.id}"><button type="button" class="opcion col-md-12 btn btn-outline-primary" data-action="editar">Editar</button></a>
                  <a class="col-md-5 p-0" href="ver.html#${element.id}"><button type="button" class="opcion col-md-12 btn btn-outline-primary" data-action="editar">Ver</button></a>
                  <button type="button" class="opcion col-md-5 btn btn-outline-primary" data-action="eliminar">Eliminar</button>
              </div>
          </div>
        </div>
      </div>`;
  });
  resultadosHTML += `</div>`;
  contentSlctr.innerHTML = resultadosHTML;
  document.getElementById("contenidoTabla").addEventListener("click", opciones);
  document.getElementById('inputPlantillas').addEventListener('change', readSingleFile, false);
}

function listaTablerosPrublicos() {
  tablerosRef.on(
    "value",
    snapshot => {
      let resultadosHTML = `<div id = "contenidoTabla">`;
      snapshot.forEach(function (element) {
        element = element.val();
        resultadosHTML += `
        <div class="card my-3 h-100" data-id="${element.id}">
            <div class="row h-100">
              <div class="col-md-4 h-100">
                <img src="${element.miniatura}" class="img-fluid d-block">
              </div>
              <div class="col-md-8 px-3">
                  <div class="row card-block px-3 justify-content-around" data-id="${
          element.id
          }">
                      <h4 class="col-md-12 card-title">${element.titulo}</h4>
                      <button type="button" class="opcion col-md-5 btn btn-outline-primary" data-action="tableroPrivado">Crear copia privada</button>
                      <a class="col-md-5 p-0" href="ver.html#${element.id}"><button type="button" class="opcion col-md-12 btn btn-outline-primary" data-action="editar">Ver</button></a>
                  </div>
              </div>
            </div>
          </div>`;
        //console.log(resultadosHTML);
      });
      //console.log(resultadosHTML);
      resultadosHTML += `</div>`;
      contentSlctr.innerHTML = resultadosHTML;
      document.getElementById("contenidoTabla").addEventListener("click", opciones);
    },
    errorObject => {
      console.log(`Fallo en lectura de datos: ${errorObject.code}`);
    }
  );
}

function listaPlantillasPublicas() {
  plantillasRef.on(
    "value",
    snapshot => {
      let resultadosHTML = `<div id = "contenidoTabla">`;
      snapshot.forEach(function (element) {
        element = element.val();
        resultadosHTML += `
        <div class="card my-3 h-100" data-id="${element.id}">
            <div class="row h-100">
              <div class="col-md-4 h-100">
                <img src="${element.miniatura}" class="img-fluid d-block">
              </div>
              <div class="col-md-8 px-3">
                  <div class="row card-block px-3 justify-content-around" data-id="${
          element.id
          }">
                      <h4 class="col-md-12 card-title">${element.titulo}</h4>
                      <button type="button" class="opcion col-md-5 btn btn-outline-primary" data-action="plantillaPrivada">Crear copia privada</button>
                      <button type="button" class="opcion col-md-5 btn btn-outline-primary" data-action="tableroPublico">Utilizar como tablero</button>
                      <a class="col-md-5 p-0" href="ver.html#${element.id}"><button type="button" class="opcion col-md-12 btn btn-outline-primary" data-action="editar">Ver</button></a>
                  </div>
              </div>
            </div>
          </div>`;
        //console.log(resultadosHTML);
      });
      //console.log(resultadosHTML);
      resultadosHTML += `</div>`;
      contentSlctr.innerHTML = resultadosHTML;
      document
        .getElementById("contenidoTabla")
        .addEventListener("click", opciones);
    },
    errorObject => {
      console.log(`Fallo en lectura de datos: ${errorObject.code}`);
    }
  );
}

function opciones(event) {
  //console.log(event);
  switch (event.target.dataset.action) {
    case "duplicar":
      duplicar(event.target.parentNode.dataset.id);
      break;
    case "publicar":
      publicar(event.target.parentNode.dataset.id);
      break;
    case "tablero":
      utilizarComoTablero(event.target.parentNode.dataset.id);
      break;
    case "eliminar":
      eliminar(event.target.parentNode.dataset.id);
      break;
    case "plantillaPrivada":
      plantillaPrivada(event.target.parentNode.dataset.id);
      break;
    case "tableroPrivado":
      tableroPrivado(event.target.parentNode.dataset.id);
      break;
    case "tableroPublico":
      tableroPublico(event.target.parentNode.dataset.id);
      break;
    case "exportarTableros":
      exportarTableros();
      break;
    case "exportarPlantillas":
      exportarPlantillas();
      break;
    default:
      break;
  }
  
}

function readSingleFile(e) {
  var file = e.target.files[0];
  if (!file) {
    return;
  }
  var reader = new FileReader();
  reader.onload = function(e) {
    var contents = e.target.result;
    cargarDatosImportados(JSON.parse(contents));
  };
  reader.readAsText(file);
}

function cargarDatosImportados(contents) {
  //console.log(contents)
  for(var element in contents){
    let elemento = contents[element].element;
    localStorage.setItem(elemento.id, JSON.stringify(elemento));
  }
  listaByHash();
}

function exportarTableros(){
  let elementoDescargar = {};
  tablerosPrivados.forEach(function(element){
    elementoDescargar[element.id]={element}
  });
  descargaElemento(elementoDescargar,'tableros');
  //console.log('exportar tableros',elementoDescargar);
}

function exportarPlantillas(){
  let elementoDescargar = {};
  plantillasPrivadas.forEach(function(element){
    elementoDescargar[element.id]={element}
  });
  descargaElemento(elementoDescargar,'plantillas');
}

function descargaElemento(elemento,nombre){
  var datos = JSON.stringify(elemento);	
  const blob = new Blob([datos], {type: "application/json"});	
  const link = document.createElement('a');	
  document.body.appendChild(link);	
  link.style.display = "none";	
  link.href = window.URL.createObjectURL(blob);	
  link.download = nombre+'.json';	
  link.click();	
  window.URL.revokeObjectURL(link.href);	
  //console.log('descargando');
}

function tableroPublico(id) {
  var elemento = plantillasRef.child(id);
  elemento.once(
    "value",
    snapshot => {
      let elemento = snapshot.val();
      elemento.id = guid();
      elemento.tipo = "tablero";
      localStorage.setItem(elemento.id, JSON.stringify(elemento));
      //console.log(snapshot.val());
    },
    errorObject => {
      console.log(`Fallo en lectura de datos: ${errorObject.code}`);
    }
  );
  //console.log(elemento);
}

function tableroPrivado(id) {
  var elemento = tablerosRef.child(id);
  elemento.once(
    "value",
    snapshot => {
      let elemento = snapshot.val();
      //elemento.id = guid();
      localStorage.setItem(elemento.id, JSON.stringify(elemento));
      //console.log(snapshot.val());
    },
    errorObject => {
      console.log(`Fallo en lectura de datos: ${errorObject.code}`);
    }
  );
  //console.log(elemento);
}

function plantillaPrivada(id) {
  var elemento = plantillasRef.child(id);
  elemento.once(
    "value",
    snapshot => {
      let elemento = snapshot.val();
      //elemento.id = guid();
      localStorage.setItem(elemento.id, JSON.stringify(elemento));
      //console.log(snapshot.val());
    },
    errorObject => {
      console.log(`Fallo en lectura de datos: ${errorObject.code}`);
    }
  );
  //console.log(elemento);
}

function utilizarComoTablero(id) {
  let elemento = JSON.parse(localStorage.getItem(id));
  elemento.tipo = "tablero";
  elemento.id = guid();
  localStorage.setItem(elemento.id, JSON.stringify(elemento));
  window.location.href = "edit.html#"+elemento.id;
  //history.pushState({},'nuevoelemento','edit.html#'+id);
}

function eliminar(id) {
  localStorage.removeItem(id);
  listaByHash();
}

function publicar(id) {
  let elementoPublicar = JSON.parse(localStorage.getItem(id));
  if (elementoPublicar.tipo === "plantilla") {
    plantillasRef.child(id).set(elementoPublicar);
  } else if (elementoPublicar.tipo === "tablero") {
    tablerosRef.child(id).set(elementoPublicar);
  }
}

function duplicar(id) {
  let elementoDuplicar = JSON.parse(localStorage.getItem(id));
  elementoDuplicar.id = guid();
  elementoDuplicar.titulo += "-copia";
  localStorage.setItem(elementoDuplicar.id, JSON.stringify(elementoDuplicar));

  if (elementoDuplicar.tipo === "plantilla") {
    plantillasPrivadas.push(elementoDuplicar);
  }
  listaByHash();
}

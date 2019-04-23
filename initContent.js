const hashValido = /[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}/;

function hashActual() {
  return window.location.href.split("#")[1] || "";
}

function contentPlantilla() {
    console.log("cargando opciones plantilla nueva");
  document.getElementById("content").innerHTML = `
    <!--
        Panel derecha, buscador, y demas elementos
        -->
      <div id="panelDerecha" class="row col-md-12">
        <div class="row col-md-12 rowBuscador">
          <div class="col-md-12 buscar">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Buscar" id="inputBusqueda" />
              <div id="btnBusqueda" class="search input-group-append">
                <span class="input-group-text"><i class="fas fa-search"></i></span>
              </div>
            </div>
          </div>
          <div id="resultadosBusqueda" class="row col-md-12"></div>
        </div>
        <div class="row col-md-12 rowNewElement ">
          <p class="col-md-4">Area</p>
          <p class="col-md-4">Pictograma</p>
          <p class="col-md-4">Texto</p>
          <div id="addrectangle" class="draggable newArea col-md-4">
            <p id="titleArea" style="display:none;"></p>
          </div>

          <div id="box-one4" class="altura newPicto draggable col-md-4">
            <img class="picto" src="plus.png" />
            <div class="picto">Nuevo</div>
            <div class="pictogramaHover"></div>
          </div>

          <div id="addText" class="draggable newText col-md-4">
            Escribe aqui tu texto
          </div>

          <div id="circulo" class="draggable altura newFig col-md-4">
            <p id="titleArea" style="display:none;">hola</p>
          </div>

          <div id="rombo" class="draggable altura newFig col-md-4">
            <p id="titleArea" style="display:none;">hola</p>
          </div>

          <div id="hexagono" class="draggable altura newFig col-md-4">
            <p id="titleArea" style="display:none;">hola</p>
          </div>

          <div id="triangulo" class="draggable altura newFig col-md-4">
            <p id="titleArea" style="display:none;">hola</p>
          </div>

          <div id="elipse" class="draggable altura newFig col-md-4">
            <p id="titleArea" style="display:none;">hola</p>
          </div>

          <div id="estrella" class="draggable altura newFig col-md-4">
            <p id="titleArea" style="display:none;">hola</p>
          </div>
        </div>
        <button type="button" id="botonDescarga" class="btn btn-primary col-md-3">
          Guardar
        </button>
      </div>
      <!--
Ajustes dropzone
-->
      <div id="panelDerechaAjustes" class="panelAjustes row col-md-12">
        <div class="row col-md-12 rowColores ">
          <div class="col-md-6 float-right">
            Color borde:
            <input id="color-borde" class="colorButton" type="color" value="#000000" />
          </div>
          <div class="col-md-6">
            Color fondo:
            <input id="color-fondo" class="colorButton" type="color" value="#ffffff" />
          </div>
        </div>
        <div class="row col-md-12 rowTitulo">
          <input type="text" class="col-md-6 form-control tituloElemento" id="tituloPlantilla" placeholder="Titulo" />
          <div class="custom-control custom-checkbox col-md-auto">
            <input type="checkbox" class="custom-control-input" id="customCheck1" />
            <label class="checkbox custom-control-label" for="customCheck1">Visible</label>
          </div>
        </div>
        <div class="row col-md-12 justify-content-start">
          <button id="botonCerrarDropZone" type="button" class="col-md-2 btn btn-primary">
            Cerrar
          </button>
        </div>
      </div>
      <!--
Ajustes pictograma
-->
      <div id="panelDerechaAjustesPicto" class="panelAjustes row col-md-12">
        <div class="row col-md-12 rowColores">
          <div class="col-md-6">
            Color borde:
            <input id="color-borde-picto" class="colorButton" type="color" />
          </div>
          <div class="col-md-6">
            Color fondo:
            <input id="color-fondo-picto" class="colorButton" type="color" />
          </div>
        </div>
        <div class="row col-md-12 rowTitulo">
          <input type="text" class="col-md-6 form-control tituloElemento" id="nombrePicto" placeholder="Titulo" />
          <div class="custom-control custom-checkbox col-md-auto">
            <input type="checkbox" class="custom-control-input" id="customCheck2" checked />
            <label class="checkbox custom-control-label" for="customCheck2">Visible</label>
          </div>
        </div>
        <div id="seleccionHover" class="row col-md-12 justify-content-center rowHover">
          <i class="fas fa-times fa-4x fa-border text-danger"></i>
          <i class="fas fa-check fa-4x fa-border text-success"></i>
        </div>
        <div class="row col-md-12 justify-content-between">
          <button id="botonEliminarPicto" type="button" class="col-md-2 btn btn-danger">
            Eliminar
          </button>
          <button id="botonCerrarPicto" type="button" class="col-md-2 btn btn-primary">
            Cerrar
          </button>
        </div>
      </div>
      <!--
Ajustes area 
-->
      <div id="panelDerechaAjustesArea" class="panelAjustes row col-md-12">
        <div class="row col-md-12 rowColores">
          <div class="col-md-6">
            Color borde:
            <input id="color-borde-area" class="colorButton" type="color" />
          </div>
          <div class="col-md-6">
            Color fondo:
            <input id="color-fondo-area" class="colorButton" type="color" />
          </div>
        </div>
        <div class="row col-md-12 rowTitulo">
          <input type="text" class="col-md-6 form-control tituloElemento" id="nombreArea" placeholder="Titulo" />
          <div class="custom-control custom-checkbox col-md-auto">
            <input type="checkbox" class="custom-control-input" id="customCheck3" />
            <label class="custom-control-label checkbox" for="customCheck3">Visible</label>
          </div>
        </div>
        <!--<div class = "row col-md-12 justify-content-center">
          <i class="fas fa-times fa-4x fa-border text-danger" id="seleccionHover" style="color: #ff922b;"></i>
        </div>-->
        <div class="row col-md-12 justify-content-between">
          <button id="botonEliminarArea" type="button" class="col-md-2 btn btn-danger">
            Eliminar
          </button>
          <button id="botonCerrarArea" type="button" class="col-md-2 btn btn-primary">
            Cerrar
          </button>
        </div>
      </div>

      <!--
Ajustes texto
-->
      <div id="panelDerechaAjustesTexto" class="panelAjustes row col-md-12">
        <div class="row col-md-12 rowColores">
          <div class="col-md-6">
            Color borde:
            <input id="color-borde-texto" class="colorButton" type="color" />
          </div>
          <div class="col-md-6">
            Color fondo:
            <input id="color-fondo-texto" class="colorButton" type="color" />
          </div>
        </div>
        <div class="row col-md-12 rowColores">
          <div class="col-md-6">
            Color texto:
            <input id="color-texto" class="colorButton" type="color" />
          </div>
        </div>
        <div class="row col-md-12 rowTitulo">
          <input type="text" class="col-md-6 form-control tituloElemento" id="nombreTexto" placeholder="Titulo" />
          <div class="custom-control custom-checkbox col-md-auto">
            <input type="checkbox" class="custom-control-input" id="customCheck5" />
            <label class="custom-control-label checkbox" for="customCheck5">Editable</label>
          </div>
        </div>
        <!--<div class = "row col-md-12 justify-content-center">
  <i class="fas fa-times fa-4x fa-border text-danger" id="seleccionHover" style="color: #ff922b;"></i>
</div>-->
        <div class="row col-md-12 justify-content-between">
          <button id="botonEliminarTexto" type="button" class="col-md-2 btn btn-danger">
            Eliminar
          </button>
          <button id="botonCerrarTexto" type="button" class="col-md-2 btn btn-primary">
            Cerrar
          </button>
        </div>
      </div>

      <!--
        Ajustes Figura 
        -->
      <div id="panelDerechaAjustesFigura" class="panelAjustes row col-md-12">
        <div class="row col-md-8 rowColores">
          <!--<div class="col-md-6">
            Color borde: <input id = 'color-borde-area' class = "colorButton" type="color">
          </div>-->
          <div class="col-md-12">
            Color fondo:
            <input id="color-fondo-figura" class="colorButton" type="color" />
          </div>
        </div>
        <div class="row col-md-12 rowTitulo">
          <input type="text" class="col-md-6 form-control tituloElemento" id="nombreFigura" placeholder="Titulo" />
          <div class="custom-control custom-checkbox col-md-auto">
            <input type="checkbox" class="custom-control-input" id="customCheck4" />
            <label class="custom-control-label checkbox" for="customCheck4">Visible</label>
          </div>
        </div>
        <!--<div class = "row col-md-12 justify-content-center">
          <i class="fas fa-times fa-4x fa-border text-danger" id="seleccionHover" style="color: #ff922b;"></i>
        </div>-->
        <div class="row col-md-12 justify-content-between">
          <button id="botonEliminarFigura" type="button" class="col-md-2 btn btn-danger">
            Eliminar
          </button>
          <button id="botonCerrarFigura" type="button" class="col-md-2 btn btn-primary">
            Cerrar
          </button>
        </div>
      </div>
    `;
    document
    .getElementById("botonDescarga")
    .addEventListener("click", guarda);
}

function contentTablero() {
  document.getElementById("content").innerHTML = `
    <!--
        Panel derecha, buscador, y demas elementos
        -->
      <div id="panelDerecha" class="row col-md-12">
        <div class="row col-md-12 rowBuscador">
          <div class="col-md-12 buscar">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Buscar" id="inputBusqueda" />
              <div id="btnBusqueda" class="search input-group-append">
                <span class="input-group-text"><i class="fas fa-search"></i></span>
              </div>
            </div>
          </div>
          <div id="resultadosBusqueda" class="row col-md-12"></div>
        </div>
        
        <button type="button" id="botonDescarga" class="btn btn-primary col-md-3">
          Guardar
        </button>
      </div>
      <!--
    Ajustes dropzone
    -->
      <div id="panelDerechaAjustes" class="panelAjustes row col-md-12">
        <div class="row col-md-12 rowColores ">
          <div class="col-md-6 float-right">
            Color borde:
            <input id="color-borde" class="colorButton" type="color" value="#000000" />
          </div>
          <div class="col-md-6">
            Color fondo:
            <input id="color-fondo" class="colorButton" type="color" value="#ffffff" />
          </div>
        </div>
        <div class="row col-md-12 rowTitulo">
          <input type="text" class="col-md-6 form-control tituloElemento" id="tituloPlantilla" placeholder="Titulo" />
          <div class="custom-control custom-checkbox col-md-auto">
            <input type="checkbox" class="custom-control-input" id="customCheck1" />
            <label class="checkbox custom-control-label" for="customCheck1">Visible</label>
          </div>
        </div>
        <div class="row col-md-12 justify-content-start">
          <button id="botonCerrarDropZone" type="button" class="col-md-2 btn btn-primary">
            Cerrar
          </button>
        </div>
      </div>
      <!--
Ajustes pictograma
-->
      <div id="panelDerechaAjustesPicto" class="panelAjustes row col-md-12">
        <div class="row col-md-12 rowColores">
          <div class="col-md-6">
            Color borde:
            <input id="color-borde-picto" class="colorButton" type="color" />
          </div>
          <div class="col-md-6">
            Color fondo:
            <input id="color-fondo-picto" class="colorButton" type="color" />
          </div>
        </div>
        <div class="row col-md-12 rowTitulo">
          <input type="text" class="col-md-6 form-control tituloElemento" id="nombrePicto" placeholder="Titulo" />
          <div class="custom-control custom-checkbox col-md-auto">
            <input type="checkbox" class="custom-control-input" id="customCheck2" checked />
            <label class="checkbox custom-control-label" for="customCheck2">Visible</label>
          </div>
        </div>
        <div id="seleccionHover" class="row col-md-12 justify-content-center rowHover">
          <i class="fas fa-times fa-4x fa-border text-danger"></i>
          <i class="fas fa-check fa-4x fa-border text-success"></i>
        </div>
        <div class="row col-md-12 justify-content-between">
          <button id="botonEliminarPicto" type="button" class="col-md-2 btn btn-danger">
            Eliminar
          </button>
          <button id="botonCerrarPicto" type="button" class="col-md-2 btn btn-primary">
            Cerrar
          </button>
        </div>
      </div>
      <!--
Ajustes area 
-->
      <div id="panelDerechaAjustesArea" class="panelAjustes row col-md-12">
        <div class="row col-md-12 rowColores">
          <div class="col-md-6">
            Color borde:
            <input id="color-borde-area" class="colorButton" type="color" />
          </div>
          <div class="col-md-6">
            Color fondo:
            <input id="color-fondo-area" class="colorButton" type="color" />
          </div>
        </div>
        <div class="row col-md-12 rowTitulo">
          <input type="text" class="col-md-6 form-control tituloElemento" id="nombreArea" placeholder="Titulo" />
          <div class="custom-control custom-checkbox col-md-auto">
            <input type="checkbox" class="custom-control-input" id="customCheck3" />
            <label class="custom-control-label checkbox" for="customCheck3">Visible</label>
          </div>
        </div>
        <!--<div class = "row col-md-12 justify-content-center">
          <i class="fas fa-times fa-4x fa-border text-danger" id="seleccionHover" style="color: #ff922b;"></i>
        </div>-->
        <div class="row col-md-12 justify-content-between">
          <button id="botonEliminarArea" type="button" class="col-md-2 btn btn-danger">
            Eliminar
          </button>
          <button id="botonCerrarArea" type="button" class="col-md-2 btn btn-primary">
            Cerrar
          </button>
        </div>
      </div>

      <!--
Ajustes texto
-->
      <div id="panelDerechaAjustesTexto" class="panelAjustes row col-md-12">
        <div class="row col-md-12 rowColores">
          <div class="col-md-6">
            Color borde:
            <input id="color-borde-texto" class="colorButton" type="color" />
          </div>
          <div class="col-md-6">
            Color fondo:
            <input id="color-fondo-texto" class="colorButton" type="color" />
          </div>
        </div>
        <div class="row col-md-12 rowColores">
          <div class="col-md-6">
            Color texto:
            <input id="color-texto" class="colorButton" type="color" />
          </div>
        </div>
        <div class="row col-md-12 rowTitulo">
          <input type="text" class="col-md-6 form-control tituloElemento" id="nombreTexto" placeholder="Titulo" />
          <div class="custom-control custom-checkbox col-md-auto">
            <input type="checkbox" class="custom-control-input" id="customCheck5" />
            <label class="custom-control-label checkbox" for="customCheck5">Editable</label>
          </div>
        </div>
        <!--<div class = "row col-md-12 justify-content-center">
  <i class="fas fa-times fa-4x fa-border text-danger" id="seleccionHover" style="color: #ff922b;"></i>
</div>-->
        <div class="row col-md-12 justify-content-between">
          <button id="botonEliminarTexto" type="button" class="col-md-2 btn btn-danger">
            Eliminar
          </button>
          <button id="botonCerrarTexto" type="button" class="col-md-2 btn btn-primary">
            Cerrar
          </button>
        </div>
      </div>

      <!--
        Ajustes Figura 
        -->
      <div id="panelDerechaAjustesFigura" class="panelAjustes row col-md-12">
        <div class="row col-md-8 rowColores">
          <!--<div class="col-md-6">
            Color borde: <input id = 'color-borde-area' class = "colorButton" type="color">
          </div>-->
          <div class="col-md-12">
            Color fondo:
            <input id="color-fondo-figura" class="colorButton" type="color" />
          </div>
        </div>
        <div class="row col-md-12 rowTitulo">
          <input type="text" class="col-md-6 form-control tituloElemento" id="nombreFigura" placeholder="Titulo" />
          <div class="custom-control custom-checkbox col-md-auto">
            <input type="checkbox" class="custom-control-input" id="customCheck4" />
            <label class="custom-control-label checkbox" for="customCheck4">Visible</label>
          </div>
        </div>
        <!--<div class = "row col-md-12 justify-content-center">
          <i class="fas fa-times fa-4x fa-border text-danger" id="seleccionHover" style="color: #ff922b;"></i>
        </div>-->
        <div class="row col-md-12 justify-content-between">
          <button id="botonEliminarFigura" type="button" class="col-md-2 btn btn-danger">
            Eliminar
          </button>
          <button id="botonCerrarFigura" type="button" class="col-md-2 btn btn-primary">
            Cerrar
          </button>
        </div>
      </div>
    `;
    document
    .getElementById("botonDescarga")
    .addEventListener("click", guarda);
}

var tipoDelContenido;

function initContent() {
    
  if (hashValido.test(hashActual())) {
    let elementoActual = JSON.parse(localStorage.getItem(hashActual()));
    tipoDelContenido = elementoActual.tipo;
  } else if (hashActual() === "nueva-plantilla") {
    tipoDelContenido = "plantilla";
  } else if (hashActual() === "nuevo-tablero") {
    tipoDelContenido = "tablero";
  }

  if (tipoDelContenido === "plantilla") {
    contentPlantilla();
    //console.log("cargando opciones plantilla nueva");
  } else if (tipoDelContenido === "tablero") {
    contentTablero();
  }
}

initContent();

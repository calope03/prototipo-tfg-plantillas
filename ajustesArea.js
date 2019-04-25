var ajustesArea = function(area) {
  var areaPadre = area;
  var areaHover = areaPadre.children[1];
  var areaText = areaPadre.children[0];
  var panelAjustes = document.getElementById("panelDerechaAjustesArea");
  var colorBorde = document.getElementById("color-borde-area");
  var colorFondo = document.getElementById("color-fondo-area");
  var nombreAreaField = document.getElementById("nombreArea");
  var visibleONo = document.getElementById("customCheck3");
  var panelDerecho = document.getElementById("panelDerecha");
  var seleccionHover = document.getElementById('seleccionHoverArea');
  var botonCerrar = document.getElementById("botonCerrarArea");
  var botonEliminar = document.getElementById('botonEliminarArea');
  var _self = this;

  function cambiaTitulo(evento) {
    console.log(evento);
    areaText.innerText = evento.target.value;
  }

  function cambiaColorBorde(evento) {
    if (evento.isTrusted) {
      areaPadre.style.borderColor = evento.target.value;
    }
  }

  function cambiaColorFondo(evento) {
    if (evento.isTrusted) {
      areaPadre.style.backgroundColor = evento.target.value;
    }
  }

  function mostrarTitulo(event) {
    if (event.target.checked) {
      areaText.style.display = "block";
    } else {
      areaText.style.display = "none";
    }
    console.log("hooooola");
  }

  function cambiaHover(event) {
    console.log('salud');
    if (event.target.classList.contains('fa-times')) {
      areaHover.style.backgroundImage = "url('error.png')";
    } else if (event.target.classList.contains('fa-check')) {
      areaHover.style.backgroundImage = "url('ok.png')";
    }else if (event.target.classList.contains('fa-times-circle')) {
      areaHover.style.backgroundImage = "";
      areaHover.style.opacity = 0.5;
    }
  }

  function cerrar() {
    panelAjustes.style.display = "none";
    panelDerecho.style.display = "block";
    _self.stop();
  }

  function eliminar(){
    panelAjustes.style.display = 'none';
    panelDerecho.style.display = 'block';
    areaPadre.parentElement.removeChild(areaPadre);
    _self.stop();
  }

  this.init = function() {
    botonCerrar.addEventListener("click", cerrar);
    botonEliminar.addEventListener('click', eliminar);
    seleccionHover.addEventListener('click',cambiaHover);
    nombreAreaField.value = areaText.innerText;
    colorBorde.addEventListener("change", cambiaColorBorde);
    colorFondo.addEventListener("change", cambiaColorFondo);
    nombreAreaField.addEventListener("keyup", cambiaTitulo);
    visibleONo.addEventListener("change", mostrarTitulo);
    panelDerecho.style.display = 'none';
    panelAjustes.style.display = "block";
    areaPadre.classList.add("myShadow");
  };

  this.stop = function() {
    botonCerrar.removeEventListener("click", cerrar);
    botonEliminar.removeEventListener('click', eliminar);
    seleccionHover.removeEventListener('click',cambiaHover);
    colorBorde.removeEventListener("change", cambiaColorBorde);
    colorFondo.removeEventListener("change", cambiaColorFondo);
    nombreAreaField.removeEventListener("keyup", cambiaTitulo);
    visibleONo.removeEventListener("change", mostrarTitulo);
    areaPadre.classList.remove("myShadow");
  };
};


var ajustesAreaTablero = function(area) {
  var areaPadre = area;
  var areaHover = areaPadre.children[1];
  var areaText = areaPadre.children[0];
  var panelAjustes = document.getElementById("panelDerechaAjustesArea");
  var seleccionHover = document.getElementById('seleccionHoverArea');
  var botonCerrar = document.getElementById("botonCerrarArea");
  var panelDerecho = document.getElementById("panelDerecha");
  var _self = this;

  function cambiaHover(event) {
    console.log('salud');
    if (event.target.classList.contains('fa-times')) {
      areaHover.style.backgroundImage = "url('error.png')";
      areaHover.style.opacity = 0.5;
    } else if (event.target.classList.contains('fa-check')) {
      areaHover.style.backgroundImage = "url('ok.png')";
      areaHover.style.opacity = 0.5;
    } else if (event.target.classList.contains('fa-circle')) {
      areaHover.style.backgroundImage = "url('circle.png')";
      areaHover.style.opacity = 0.8;
    } else if (event.target.classList.contains('fa-square')) {
      areaHover.style.backgroundImage = "url('square.png')";
      areaHover.style.opacity = 0.5;
    }else if (event.target.classList.contains('fa-times-circle')) {
      areaHover.style.backgroundImage = "";
      areaHover.style.opacity = 0.5;
    }
  }

  function cerrar() {
    panelAjustes.style.display = "none";
    panelDerecho.style.display = "block";
    _self.stop();
  }


  this.init = function() {
    botonCerrar.addEventListener("click", cerrar);
    seleccionHover.addEventListener('click',cambiaHover);
    panelDerecho.style.display = 'none';
    panelAjustes.style.display = "block";
    areaPadre.classList.add("myShadow");
  };

  this.stop = function() {
    botonCerrar.removeEventListener("click", cerrar);
    seleccionHover.removeEventListener('click',cambiaHover);
    areaPadre.classList.remove("myShadow");
  };
};



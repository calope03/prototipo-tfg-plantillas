var ajustesTexto = function(area) {
    var areaPadre = area;
    /*var pictoImg = pictogramaPadre.children[0];
      var pictoText = pictogramaPadre.children[1];
      var pictoHover = pictogramaPadre.children[2];*/
    var areaText = areaPadre.innerText;
    var panelAjustes = document.getElementById("panelDerechaAjustesTexto");
    var colorBorde = document.getElementById("color-borde-texto");
    var colorFondo = document.getElementById("color-fondo-texto");
    var colorTexto = document.getElementById("color-texto");
    var nombreAreaField = document.getElementById("nombreTexto");
    var visibleONo = document.getElementById("customCheck5");
    var panelDerecho = document.getElementById("panelDerecha");
    var botonCerrar = document.getElementById("botonCerrarTexto");
    var botonEliminar = document.getElementById("botonEliminarTexto");
    var _self = this;
    
    function cambiaTitulo(evento) {
      //console.log(evento);
      areaPadre.innerText= evento.target.value;
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

    function cambiaColorTexto(evento) {
      if (evento.isTrusted) {
        areaPadre.style.color = evento.target.value;
      }
    }
  
    function mostrarTitulo(event) {
      if (event.target.checked) {
        areaPadre.dataset.editable = "true";
      } else {
        areaPadre.dataset.editable = "false";
      }
      //console.log("hooooola");
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
      botonEliminar.addEventListener("click", eliminar);
      //seleccionHover.addEventListener('click',cambiaHover);
      nombreAreaField.value = areaText;
      colorBorde.addEventListener("change", cambiaColorBorde);
      colorFondo.addEventListener("change", cambiaColorFondo);
      nombreAreaField.addEventListener("keyup", cambiaTitulo);
      colorTexto.addEventListener("change", cambiaColorTexto);
      visibleONo.addEventListener("change", mostrarTitulo);
      panelDerecho.style.display = 'none';
      panelAjustes.style.display = "block";
      areaPadre.classList.add("myShadow");
      //  console.log(visibleONo);
    };
  
    this.stop = function() {
      botonCerrar.removeEventListener("click", cerrar);
      botonEliminar.removeEventListener("click", eliminar);
      //panelAjustes.removeEventListener('click', aceptarOCancelar);
      //seleccionHover.removeEventListener('click',cambiaHover);
      // nombrePictoField.value = pictoText.innerText;
      colorBorde.removeEventListener("change", cambiaColorBorde);
      colorFondo.removeEventListener("change", cambiaColorFondo);
      nombreAreaField.removeEventListener("keyup", cambiaTitulo);
      areaPadre.classList.remove("myShadow");
  
      //console.log("parando picto ");
    };
  };
  

  var ajustesTextoTablero = function(area) {
    var areaPadre = area;
    var areaText = areaPadre.innerText;
    var panelAjustes = document.getElementById("panelDerechaAjustesTexto");
    var nombreAreaField = document.getElementById("nombreTexto");
    var panelDerecho = document.getElementById("panelDerecha");
    var botonCerrar = document.getElementById("botonCerrarTexto");
    var _self = this;

    function cambiaTitulo(evento) {
      //console.log(evento);
      areaPadre.innerText= evento.target.value;
    }

    function cerrar() {
      panelAjustes.style.display = "none";
      panelDerecho.style.display = "block";
      _self.stop();
    }
  
    this.init = function() {
      botonCerrar.addEventListener("click", cerrar);
      nombreAreaField.value = areaText;
      nombreAreaField.addEventListener("keyup", cambiaTitulo);
      panelDerecho.style.display = 'none';
      panelAjustes.style.display = "block";
    };
  
    this.stop = function() {
      botonCerrar.removeEventListener("click", cerrar);
      nombreAreaField.removeEventListener("keyup", cambiaTitulo);
      areaPadre.classList.remove("myShadow");
    };
  };
  
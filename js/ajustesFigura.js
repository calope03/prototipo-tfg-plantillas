var ajustesFigura = function(area) {
    var areaPadre = area;
    /*var pictoImg = pictogramaPadre.children[0];
      var pictoText = pictogramaPadre.children[1];
      var pictoHover = pictogramaPadre.children[2];*/
    var areaText = areaPadre.children[0];
    var panelAjustes = document.getElementById("panelDerechaAjustesFigura");
    //var colorBorde = document.getElementById("color-borde-area");
    var colorFondo = document.getElementById("color-fondo-figura");
    var nombreAreaField = document.getElementById("nombreFigura");
    var visibleONo = document.getElementById("customCheck4");
    //var pictoOriginal = pictogramaPadre.cloneNode(true);
    var panelDerecho = document.getElementById("panelDerecha");
    //var seleccionHover = document.getElementById('seleccionHover');
    var botonCerrar = document.getElementById("botonCerrarFigura");
    var botonEliminar = document.getElementById("botonEliminarFigura");
    var _self = this;
      
    function cambiaTitulo(evento) {
      //console.log(evento);
      areaText.innerText = evento.target.value;
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
      nombreAreaField.value = areaText.innerText;
      //colorBorde.addEventListener("change", cambiaColorBorde);
      colorFondo.addEventListener("change", cambiaColorFondo);
      nombreAreaField.addEventListener("keyup", cambiaTitulo);
      visibleONo.addEventListener("change", mostrarTitulo);
      panelDerecho.style.display = 'none';
      panelAjustes.style.display = "block";
      areaPadre.classList.add("myShadow");
      //  console.log(visibleONo);
    };
  
    this.stop = function() {
      botonCerrar.removeEventListener("click", cerrar);
      botonEliminar.removeEventListener("click", eliminar);
      colorFondo.removeEventListener("change", cambiaColorFondo);
      nombreAreaField.removeEventListener("keyup", cambiaTitulo);
      visibleONo.removeEventListener("change", mostrarTitulo);
      //panelAjustes.style.display = 'block';
      areaPadre.classList.remove("myShadow");
  
      //console.log("parando picto ");
    };
  };
  


  var ajustesFiguraTablero = function(area) {
    var areaPadre = area;
    var areaText = areaPadre.children[0];
    var panelAjustes = document.getElementById("panelDerechaAjustesFigura");
    var colorFondo = document.getElementById("color-fondo-figura");
    var panelDerecho = document.getElementById("panelDerecha");
    var botonCerrar = document.getElementById("botonCerrarFigura");
    var _self = this;
  
    function cambiaColorFondo(evento) {
      if (evento.isTrusted) {
        areaPadre.style.backgroundColor = evento.target.value;
      }
    }
  
    function cerrar() {
      panelAjustes.style.display = "none";
      panelDerecho.style.display = "block";
      _self.stop();
    }
    
    this.init = function() {
      botonCerrar.addEventListener("click", cerrar);
      colorFondo.addEventListener("change", cambiaColorFondo);
      panelDerecho.style.display = 'none';
      panelAjustes.style.display = "block";
      areaPadre.classList.add("myShadow");
    };
  
    this.stop = function() {
      botonCerrar.removeEventListener("click", cerrar);
      colorFondo.removeEventListener("change", cambiaColorFondo);
      areaPadre.classList.remove("myShadow");
    };
  };
  
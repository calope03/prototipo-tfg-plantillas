var ajustesPicto = function (pictograma) {

  var pictogramaPadre = pictograma;
  var pictoImg = pictogramaPadre.children[0];
  var pictoText = pictogramaPadre.children[1];
  var pictoHover = pictogramaPadre.children[2];
  var panelAjustes = document.getElementById('panelDerechaAjustesPicto');
  var colorBorde = document.getElementById("color-borde-picto");
  var colorFondo = document.getElementById("color-fondo-picto");
  var nombrePictoField = document.getElementById('nombrePicto');
  var visibleONo = document.getElementById('customCheck2');
  //var pictoOriginal = pictogramaPadre.cloneNode(true);
  var panelDerecho = document.getElementById('panelDerecha');
  var seleccionHover = document.getElementById('seleccionHover');
  var botonCerrar = document.getElementById('botonCerrarPicto');
  var botonEliminar = document.getElementById('botonEliminarPicto');
  var _self = this;
  //console.log(pictoHijos);
 
  function cambiaTitulo(evento) {
    //console.log(evento);
    pictoText.innerText = evento.target.value;
  }

  function cambiaColorBorde(evento) {
    //console.log('cambiandocolor', evento);
    if (evento.isTrusted) {
      pictogramaPadre.style.borderColor = evento.target.value;
    }
  }

  function cambiaColorFondo(evento) {
    //console.log('cambiandocolor', evento);
    if (evento.isTrusted) {
      pictogramaPadre.style.backgroundColor = evento.target.value;
    }
  }

  function mostrarTitulo(event) {
    if (event.target.checked) {
      pictoText.style.display = 'block';
    } else {
      pictoText.style.display = 'none';
    }
    //console.log("hooooola");
  };

  function cambiaHover(event) {
    //console.log('salud');
    if (event.target.classList.contains('fa-times')) {
      pictoHover.style.backgroundImage = "url('./img/error.png')";

    } else if (event.target.classList.contains('fa-check')) {
      pictoHover.style.backgroundImage = "url('./img/ok.png')";
      //console.log('salud');
    }else if (event.target.classList.contains('fa-times-circle')) {
      pictoHover.style.backgroundImage = "";
      pictoHover.style.opacity = 0.5;
    }
  }

  function cerrar() {
    panelAjustes.style.display = 'none';
    panelDerecho.style.display = 'block';
    _self.stop();
  }

  function eliminar() {
    panelAjustes.style.display = 'none';
    panelDerecho.style.display = 'block';
    pictogramaPadre.parentElement.removeChild(pictogramaPadre);
    _self.stop();
  }

  this.init = function () {
    
    botonCerrar.addEventListener('click', cerrar);
    botonEliminar.addEventListener('click', eliminar);
    seleccionHover.addEventListener('click', cambiaHover);
    nombrePictoField.value = pictoText.innerText;
    colorBorde.addEventListener('change', cambiaColorBorde);
    colorFondo.addEventListener('change', cambiaColorFondo);
    nombrePictoField.addEventListener('keyup', cambiaTitulo);
    visibleONo.addEventListener('change', mostrarTitulo);
    panelDerecho.style.display = 'none';
    panelAjustes.style.display = 'block';
    pictogramaPadre.classList.add('myShadow');
   
    //  console.log(visibleONo);
  }

  this.stop = function () {
    botonCerrar.removeEventListener('click', cerrar);
    botonEliminar.removeEventListener('click', eliminar);
    //panelAjustes.removeEventListener('click', aceptarOCancelar);
    seleccionHover.removeEventListener('click', cambiaHover);
    // nombrePictoField.value = pictoText.innerText;
    colorBorde.removeEventListener('change', cambiaColorBorde);
    colorFondo.removeEventListener('change', cambiaColorFondo);
    nombrePictoField.removeEventListener('keyup', cambiaTitulo);
    visibleONo.removeEventListener('change', mostrarTitulo);
    //panelAjustes.style.display = 'block';
    pictogramaPadre.classList.remove('myShadow');

    //console.log('parando picto ');
  }

};

var ajustesPictoTablero = function (pictograma) {

  var pictogramaPadre = pictograma;
  var pictoImg = pictogramaPadre.children[0];
  var pictoText = pictogramaPadre.children[1];
  var pictoHover = pictogramaPadre.children[2];
  var panelAjustes = document.getElementById('panelDerechaAjustesPicto');
  var panelDerecho = document.getElementById('panelDerecha');
  var seleccionHover = document.getElementById('seleccionHover');
  var botonCerrar = document.getElementById('botonCerrarPicto');
  var _self = this;

  function cambiaHover(event) {
    //console.log('salud');
    if (event.target.classList.contains('fa-times')) {
      pictoHover.style.backgroundImage = "url('./img/error.png')";
      pictoHover.style.opacity = 0.5;
      //pictoHover.style.backgroundSize = "cover";
    } else if (event.target.classList.contains('fa-check')) {
      pictoHover.style.backgroundImage = "url('./img/ok.png')";
      pictoHover.style.opacity = 0.5;
      //pictoHover.style.backgroundSize = "cover";
    } else if (event.target.classList.contains('fa-circle')) {
      pictoHover.style.backgroundImage = "url('./img/circle.png')";
      pictoHover.style.opacity = 0.8;
      //pictoHover.style.backgroundSize = "cover";
    } else if (event.target.classList.contains('fa-square')) {
      pictoHover.style.backgroundImage = "url('./img/square.png')";
      pictoHover.style.opacity = 0.5;
      //pictoHover.style.backgroundSize = "cover";
    }else if (event.target.classList.contains('fa-times-circle')) {
      pictoHover.style.backgroundImage = "";
      pictoHover.style.opacity = 0.5;
    }
  }

  function cerrar() {
    panelAjustes.style.display = 'none';
    panelDerecho.style.display = 'block';
    _self.stop();
  }

  this.init = function () {
    
    botonCerrar.addEventListener('click', cerrar);
    seleccionHover.addEventListener('click', cambiaHover);
    panelDerecho.style.display = 'none';
    panelAjustes.style.display = 'block';
    pictogramaPadre.classList.add('myShadow');
  }

  this.stop = function () {
    botonCerrar.removeEventListener('click', cerrar);
    seleccionHover.removeEventListener('click', cambiaHover);
    pictogramaPadre.classList.remove('myShadow');
  }
};










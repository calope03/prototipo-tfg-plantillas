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
  /*
  var dropzone = document.getElementById("dropzone");
  var panelDerecho = document.getElementById('panelDerecha');
  var dropZoneOriginal = dropzone.cloneNode(false);
  var panelAjustes = document.getElementById('panelDerechaAjustes');
  */

  /* function aceptarOCancelar(evento){
     //console.log(evento);
     if(evento.isTrusted){
       var clases = evento.target.classList;
       if(clases.contains('btn-success')){
           panelAjustes.style.display = 'none';
           panelDerecho.style.display = 'block';
           _self.stop(false);
       }else if(clases.contains('btn-danger')){
           
           panelAjustes.style.display = 'none';
           panelDerecho.style.display = 'block';
           console.log('no',evento);
           _self.stop(true);
       }
       
     }
   }*/

  function cambiaTitulo(evento) {
    console.log(evento);
    pictoText.innerText = evento.target.value;
  }

  function cambiaColorBorde(evento) {
    console.log('cambiandocolor', evento);
    if (evento.isTrusted) {
      pictogramaPadre.style.borderColor = evento.target.value;
    }
  }

  function cambiaColorFondo(evento) {
    console.log('cambiandocolor', evento);
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
    console.log("hooooola");
  };

  function cambiaHover(event) {
    console.log('salud');
    if (event.target.classList.contains('fa-times')) {
      pictoHover.style.backgroundImage = "url('error.png')";
      /*event.target.classList.add('fa-check','text-success');
      event.target.classList.remove('fa-times','text-danger');*/

      //pictoHover.style.backgroundSize = "cover";

    } else if (event.target.classList.contains('fa-check')) {
      pictoHover.style.backgroundImage = "url('ok.png')";
      /* event.target.classList.remove('fa-check', 'text-success');
       event.target.classList.add('fa-times','text-danger');*/

      //pictoHover.style.backgroundSize = "cover";
      console.log('salud');
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

    /*if(cancelar){
      console.log(pictogramaPadre);
      let padre =pictogramaPadre.parentNode;
      if(padre){
        padre.replaceChild(pictoOriginal,pictogramaPadre);
      }
      
    }*/
    console.log('parando picto ');
  }

};






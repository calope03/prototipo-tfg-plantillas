
/**/


var ajustesDropzone = function () {
    
    var dropzone = document.getElementById("dropzone");
    var panelDerecho = document.getElementById('panelDerecha');
    //var dropZoneOriginal = dropzone.cloneNode(true);
    var panelAjustes = document.getElementById('panelDerechaAjustes');
    var titlePlantillaField = document.getElementById('tituloPlantilla');
    var colorBorde = document.getElementById("color-borde");
    var colorFondo = document.getElementById("color-fondo");
    var visibleONo = document.getElementById('customCheck1');
    var botonCerrar =  document.getElementById('botonCerrarDropZone')
    var _self = this;
    
  /*  function aceptarOCancelar(evento){
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
    }
    */
    function cambiaTitulo(evento){
        console.log(evento);
        let tituloPlantilla = document.getElementById('title');
        tituloPlantilla.innerText = evento.target.value;
    }
    
    
    function cambiaColorBorde(evento){
      console.log('cambiandocolor',evento);
      if(evento.isTrusted){
          dropzone.style.borderColor = evento.target.value;
      }
    }
    
    function cambiaColorFondo(evento){
      console.log('cambiandocolor',evento);
      if(evento.isTrusted){
          dropzone.style.backgroundColor = evento.target.value;
      }
    }
    
    function mostrarTitulo(event){
      let tituloPlantilla = document.getElementById('title');
      if (event.target.checked) {
        tituloPlantilla.style.display = 'block';
      } else {
        tituloPlantilla.style.display = 'none';
      }
      console.log("hooooola");
    };
    
    function cerrar(){
      panelAjustes.style.display = 'none';
      panelDerecho.style.display = 'block';
      _self.stop();
    }

    this.init = function(){
      botonCerrar.addEventListener('click',cerrar);
     // panelAjustes.addEventListener('click', aceptarOCancelar);
      titlePlantillaField.addEventListener('keyup',cambiaTitulo);
      colorBorde.addEventListener('change',cambiaColorBorde);
      colorFondo.addEventListener('change',cambiaColorFondo);
      visibleONo.addEventListener('change', mostrarTitulo);
      panelAjustes.style.display = 'block';
    }
  
    this.stop = function(){
      console.log('parando dropzone');
      botonCerrar.removeEventListener('click',cerrar);
      //panelAjustes.removeEventListener('click', aceptarOCancelar);
      titlePlantillaField.removeEventListener('keyup',cambiaTitulo);
      colorBorde.removeEventListener('change',cambiaColorBorde);
      colorFondo.removeEventListener('change',cambiaColorFondo);
      visibleONo.removeEventListener('change', mostrarTitulo);
      
      
      /*
      if(cancelar){
        dropZoneOriginal.addEventListener("dblclick", function(){
            muestraAjustes(event);
        }); 
        let padre =dropzone.parentNode;
        if(padre){
          padre.replaceChild(dropZoneOriginal,dropzone);
        }
      }*/
      //panelAjustes.style.display = 'block';
    }
};
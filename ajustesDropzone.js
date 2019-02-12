var dropzone = document.getElementById("dropzone");
var panelDerecho = document.getElementById('panelDerecha');
var dropZoneOriginal;

var ajustesDropzone = function () {
    
    var dropzone = document.getElementById("dropzone");
    var panelDerecho = document.getElementById('panelDerecha');
    var dropZoneOriginal = dropzone.cloneNode(true);
    var panelAjustes = document.getElementById('panelDerechaAjustes');
    var titlePlantillaField = document.getElementById('tituloPlantilla');
    var colorBorde = document.getElementById("color-borde");
    var colorFondo = document.getElementById("color-fondo");
    var visibleONo = document.getElementById('customCheck1');
    
    function stop(){
      console.log('parando');
      panelAjustes.removeEventListener('click', aceptarOCancelar);
      titlePlantillaField.removeEventListener('keyup',cambiaTitulo);
      colorBorde.removeEventListener('click', function(evento){cambiaColor(evento,"borderColor");});
      colorFondo.removeEventListener('click',function(evento){cambiaColor(evento,"backgroundColor");});
      visibleONo.removeEventListener('change', mostrarTitulo);
      //panelAjustes.style.display = 'block';
    }
    
    function aceptarOCancelar(evento){
      //console.log(evento);
      if(evento.isTrusted){
        var clases = evento.target.classList;
        if(clases.contains('btn-success')){
            panelAjustes.style.display = 'none';
            panelDerecho.style.display = 'block';
            stop();
        }else if(clases.contains('btn-danger')){
            let padre =dropzone.parentNode;
            padre.replaceChild(dropZoneOriginal,dropzone);
            panelAjustes.style.display = 'none';
            panelDerecho.style.display = 'block';
            console.log('no',evento);
            stop();
        }
        
      }
    }
    
    function cambiaTitulo(evento){
        console.log(evento);
        let tituloPlantilla = document.getElementById('title');
        tituloPlantilla.innerText = evento.target.value;
    }
    
    function cambiaColor(evento,tipo){
      if(evento.isTrusted){
        var clases = evento.target.classList;
        for(var i = 0; i< clases.length; i++){
          if(colors.includes(clases[i])){
            dropzone.style[tipo] = clases[i];
            break;
          }
        }
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

    this.init = function(){
      panelAjustes.addEventListener('click', aceptarOCancelar);
      titlePlantillaField.addEventListener('keyup',cambiaTitulo);
      colorBorde.addEventListener('click', function(evento){cambiaColor(evento,"borderColor");});
      colorFondo.addEventListener('click',function(evento){cambiaColor(evento,"backgroundColor");});
      visibleONo.addEventListener('change', mostrarTitulo);
      panelAjustes.style.display = 'block';
    }
  
};
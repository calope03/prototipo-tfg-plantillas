//var myajustes = (function() {
    var dropzone = document.getElementById("dropzone");
    var ajustes;
    
    dropzone.addEventListener("dblclick", function(){
        muestraAjustes(event);
    }); 
    function ocultaPaneles(){
        var panelesAjustes = Array.prototype.slice.call(document.querySelectorAll(".panelAjustes"));
        panelesAjustes.forEach(function(elemento){
            elemento.style.display = 'none';
        });
    };
    //ocultaPaneles();
    function muestraAjustes(event){
        var panelDerecho = document.getElementById('panelDerecha');
        var classTarget = event.target.classList;
        console.log('classtarget',classTarget);
        panelDerecho.style.display = 'none';
        ocultaPaneles();
        console.log(ajustes);
        if(ajustes){
            ajustes.stop(true);
        }
        if(classTarget.contains("dropzone")){
            ajustes = new ajustesDropzone();
            ajustes.init();
        }else if(classTarget.contains("pictogramaHover")){
            //console.log('elemento a editar!!!!!',event.target.parentElement);
            
           // console.log('ajustes',ajustes);
            ajustes = new ajustesPicto(event.target.parentElement);
            ajustes.init();
            console.log('ajustes',ajustes);
            //var ajustesPicto = document.getElementById('panelDerechaAjustesPicto');
           // ajustesPicto.style.display = 'block';
            //event.target.parentNode.style.display = ''
        }else if(classTarget.contains("newArea")){
            ajustes = new ajustesArea(event.target);
            ajustes.init();
        }
       /* //var panelDerecho = document.getElementById('panelDerecha');
        dropZoneOriginal = dropzone.cloneNode(false);
        panelDerecho.style.display = 'none';
        panelAjustes.style.display = 'block';
        console.log('click dropzone',event);*/
    }
    
//})();


/*https://developer.mozilla.org/es/docs/Web/HTML/Elemento/input/color

https://stackoverflow.com/questions/40064087/html-div-tag-input-color-value-control-for-new-html-div-element
*/
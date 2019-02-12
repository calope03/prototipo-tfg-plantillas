dropzone.addEventListener("dblclick", function(){
    muestraAjustes(event);
}); 

var panelesAjustes = Array.prototype.slice.call(document.querySelectorAll(".panelAjustes"));

panelesAjustes.forEach(function(elemento){
    elemento.style.display = 'none';
});
//panelAjustes.style.display = 'none';

function muestraAjustes(event){
    var classTarget = event.target.classList;
    console.log('classtarget',classTarget);
    panelDerecho.style.display = 'none';
    var ajustes;
    if(classTarget.contains("dropzone")){
        ajustes = new ajustesDropzone();
        ajustes.init();
    }else if(classTarget.contains("pictogramaHover")){
        console.log('elemento a editar!!!!!',event.target.parentElement);
        
        console.log('ajustes',ajustes);
        ajustes = new ajustesPicto(event.target.parentElement);
        ajustes.init();
        console.log('ajustes',ajustes);
        //var ajustesPicto = document.getElementById('panelDerechaAjustesPicto');
       // ajustesPicto.style.display = 'block';
        //event.target.parentNode.style.display = ''
    }
   /* //var panelDerecho = document.getElementById('panelDerecha');
    dropZoneOriginal = dropzone.cloneNode(false);
    panelDerecho.style.display = 'none';
    panelAjustes.style.display = 'block';
    console.log('click dropzone',event);*/
}




/*
var miCoche = new cocheEmpresa ("Audi", "S8", 2, "negro", "Berlina");
var miCoche2 = new cocheEmpresa ("Audi", "S4", 2, "Rojo", "Compacto");*/


function renderEditView(){
    if(hashValido.test(hashActual())){
        //console.log('recalculando??');
        var dropzone =  document.getElementById('dropzone');
        let elementoPintar = JSON.parse(localStorage.getItem(hashActual()));
        //console.log(elemento)
        resizeElementos(dropzone, elemento);
    
    }else if(hashActual()==='nueva-plantilla'){
        document.getElementById('textForTitle').innerText = "Titulo de la plantilla: "; 
        document.getElementById('nombrePlantilla').value = 'Nueva plantilla';
    }else if(hashActual()==='nuevo-tablero'){
        document.getElementById('textForTitle').innerText = "Titulo del tablero: "; 
        document.getElementById('nombrePlantilla').value = 'Nuevo tablero';
    }
}
setTimeout(function(){renderEditView()},700);



function rellenaInputTitulo(elementoPintar){
    let textTitulo = document.getElementById('textForTitle');
    if(elementoPintar.tipo === "plantilla"){
        textTitulo.innerText = "Titulo de la plantilla: ";
    }else if(elementoPintar.tipo === "tablero"){
        textTitulo.innerText = "Titulo del tablero: ";
    }
    document.getElementById('nombrePlantilla').value = elementoPintar.titulo;
}

function resizeElementos(dropzone, elementoPintar){
    //console.log('dropzone',dropzone)
    //console.log('elemento',elementoPintar)
    let altoAntiguo = elementoPintar.tamano.alto;
    let altoNuevo = dropzone.clientHeight;
    let anchoAntiguo = elementoPintar.tamano.ancho;
    let anchoNuevo = dropzone.clientWidth;
    var variacionAlto = 1;
    var variacionAncho = 1;
    
    dropzone.outerHTML = elementoPintar.contenido;
    dropzone =  document.getElementById('dropzone');
    /*console.log(dropzone)
    console.log(elementoPintar.contenido)*/
    if(altoAntiguo !== altoNuevo){
        variacionAlto =  ((100*altoNuevo)/altoAntiguo)/100;
        //console.log('recalculando!!');
    }
    if(anchoAntiguo !== anchoNuevo){
        variacionAncho =  ((100*anchoNuevo)/anchoAntiguo)/100;  
    }
    Array.prototype.slice.call(dropzone.children).forEach(function(element){
        //console.log('ey',element);
        if(element.classList.contains('newArea')){
            
            Array.prototype.slice.call(element.children).forEach(function(element){
                //console.log('eeeeey',element)
                if(element.nodeName === 'DIV'){
                    element.style.width = (parseFloat(element.style.width,10)*variacionAncho) +'px';
                    element.style.left = (parseFloat(element.style.left,10)*variacionAncho) +'px'; 
                    element.style.height = (parseFloat(element.style.height,10)*variacionAlto) +'px';
                    element.style.top = (parseFloat(element.style.top,10)*variacionAlto) +'px'; 
                }
            });
        }
        if(element.nodeName === 'DIV'){
            element.style.width = (parseFloat(element.style.width,10)*variacionAncho) +'px';
            element.style.left = (parseFloat(element.style.left,10)*variacionAncho) +'px'; 
            element.style.height = (parseFloat(element.style.height,10)*variacionAlto) +'px';
            element.style.top = (parseFloat(element.style.top,10)*variacionAlto) +'px'; 
        }
    });

}
const hashValido = /[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}/;

function hashActual () {
    return window.location.href.split('#')[1] || '';
}


if(hashValido.test(hashActual())){
    console.log('recalculando??');
    var dropzone =  document.getElementById('dropzone');
    let elementoPintar = JSON.parse(localStorage.getItem(hashActual()));
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
        console.log('recalculando!!');
    }
    if(anchoAntiguo !== anchoNuevo){
        variacionAncho =  ((100*anchoNuevo)/anchoAntiguo)/100;  
    }
    Array.prototype.slice.call(dropzone.children).forEach(function(element){
        console.log('ey',element);
        if(element.nodeName === 'DIV'){
            element.style.width = (parseFloat(element.style.width,10)*variacionAncho) +'px';
            element.style.left = (parseFloat(element.style.left,10)*variacionAncho) +'px'; 
            element.style.height = (parseFloat(element.style.height,10)*variacionAlto) +'px';
            element.style.top = (parseFloat(element.style.top,10)*variacionAlto) +'px'; 
        }
    });
}
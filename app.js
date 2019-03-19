//(function(){
  var myWidth = window.innerWidth;
  var myHeight = window.innerHeight; 
  var body = document.querySelector('body');
  var container = document.querySelector('.container-fluid');
  container.style.width=myWidth+"px";
  container.style.height=myHeight+"px";
  body.style.width = myWidth+"px";
  body.style.height = myHeight+"px";
//})();


console.log("width:",myWidth,"height",myHeight);

var titlePlantilla = document.getElementById('title');
titlePlantilla.style.display = 'none';



textFit(document.getElementById('addText'));

function recalculaAlturaPictogramas(){
  var pictogramas = Array.prototype.slice.call(document.querySelectorAll('.pictograma'));

  pictogramas.forEach(function(element){
    element.style.height = ((element.clientWidth*110)/100) +"px";
    console.log(element.style.height);
  });
  
  function alturaPictograma(picto){
    var elemsPicto = Array.prototype.slice.call(picto.children);
    var altura = 15;
    var pictoHover;
    for (var i = 0; i<elemsPicto.length; i++) {
      console.log('elemento',elemsPicto[i].scrollHeight);
      if(elemsPicto[i].classList.contains('pictogramaHover')){
        pictoHover = elemsPicto[i];
      }else{
        altura += elemsPicto[i].scrollHeight;
      }
    }
    /*if(pictoHover){
      pictoHover.style.height = altura+"px";
    }*/
    return altura;
  }
}/*
var pictogramas = Array.prototype.slice.call(document.querySelectorAll('.pictograma'));

pictogramas.forEach(function(element){
  element.style.height = ((element.clientWidth*110)/100) +"px";
  console.log(element.style.height);
});

function alturaPictograma(picto){
  var elemsPicto = Array.prototype.slice.call(picto.children);
  var altura = 15;
  var pictoHover;
  for (var i = 0; i<elemsPicto.length; i++) {
    console.log('elemento',elemsPicto[i].scrollHeight);
    if(elemsPicto[i].classList.contains('pictogramaHover')){
      pictoHover = elemsPicto[i];
    }else{
      altura += elemsPicto[i].scrollHeight;
    }
  }
  /*if(pictoHover){
    pictoHover.style.height = altura+"px";
  }
  return altura;
}*/


recalculaAlturaPictogramas();
function noMover(elemento){
  elemento.style.webkitTransform =
  elemento.style.transform =
    'translate(' + 0 + 'px, ' + 0 + 'px)';

  // update the posiion attributes
  elemento.setAttribute('data-x', 0);
  elemento.setAttribute('data-y', 0);
}

function creaPicto(event){
  var pictoclonado = colocaElemento(event);
  pictoclonado.classList.remove('col-md-4');
  pictoclonado.classList.remove('draggable');
  pictoclonado.classList.add('draggado');
}

function creaPictoAjustado(event){
  var pictoclonado = colocaElemento(event);
  pictoclonado.classList.remove('col-md-4');
  pictoclonado.classList.remove('draggable');
  pictoclonado.classList.add('pictoDraggado');
}

function creaArea(event){
  var areaClonada = colocaElemento(event);
  areaClonada.classList.remove('col-md-6');
  areaClonada.classList.remove('draggable');
  areaClonada.classList.add('rectdraggable');
}

function creaAreaPicto(event){
  var pictoclonado = colocaElemento(event);
  pictoclonado.classList.remove('col-md-4');
  pictoclonado.classList.remove('draggable');
  pictoclonado.classList.add('pictoDraggado');
}

function colocaElemento(event){
  var elemento = event.relatedTarget;
  var posX = event.interaction.curCoords.client.x;
  var posY = event.interaction.curCoords.client.y;
  var dropZone = event.target;
  
  console.log("posx:",posX,"posy:",posY, "dropzone", dropZone);
  var elementoClonado = elemento.cloneNode(true); 
  
  var anchoPicto = elemento.offsetWidth;
  var altoPicto = elemento.offsetHeight;
  elementoClonado.style.width = anchoPicto+"px";
  elementoClonado.style.height = altoPicto+"px";
  console.log('holaaaaaaaaa', elementoClonado.style.height)
  var posicionZone = dropZone.getBoundingClientRect();
  
  elementoClonado.style.left=(posX - (anchoPicto/2)-posicionZone.left)+"px";
  elementoClonado.style.top=(posY - (altoPicto/2)-posicionZone.top)+"px";
  
  var despVer = 566*100/myHeight;
  elementoClonado.style.position="absolute";
  console.log("posfortop:",elementoClonado.style.top,"posforleft:",elementoClonado.style.left);
  noMover(elementoClonado);
  dropZone.appendChild(elementoClonado);
  
  return elementoClonado;
}


function colocaElementoAjustado(event){
  var elemento = event.relatedTarget;
  var posX = event.interaction.curCoords.client.x;
  var posY = event.interaction.curCoords.client.y;
  var dropZone = event.target;
  console.log('elemento', elemento);
  console.log('dropZone', dropZone);
  
  console.log("posx:",posX,"posy:",posY);
  var elementoClonado = elemento.cloneNode(true); 
  
  var anchoPicto = elemento.offsetWidth;
  var altoPicto = elemento.offsetHeight;
  
  let altoZona = dropZone.clientHeight;
  let anchoZona = dropZone.clientWidth;
 /* elementoClonado.style.maxWidth = 100 + "%";
  elementoClonado.style.maxHeight = 100 + "%";*/
 
  if(anchoZona >= altoZona){
    elementoClonado.style.height = 100+"%";  
  }else{
    elementoClonado.style.width = 100+"%";
  }
  //elementoClonado.style.width = anchoZona+"px";
 // elementoClonado.style.height = altoZona+"px";
  console.log('holaaaaaaaaa', elementoClonado.style.height)
  var posicionZone = dropZone.getBoundingClientRect();
  
  elementoClonado.style.left= 0 +"px";
  elementoClonado.style.top= 0 +"px";
  
  elementoClonado.style.position="absolute";
  console.log("posfortop:",elementoClonado.style.top,"posforleft:",elementoClonado.style.left);
  noMover(elementoClonado);
  dropZone.appendChild(elementoClonado);
  
  return elementoClonado;
}
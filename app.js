//(function(){
  var myWidth = window.innerWidth;
  var myHeight = window.innerHeight; 
  var body = document.querySelector('body');
  body.style.width = myWidth+"px";
  body.style.height = myHeight+"px";
//})();


console.log("width:",myWidth,"height",myHeight);

var pictogramas = Array.prototype.slice.call(document.querySelectorAll('.pictograma'));

pictogramas.forEach(function(element){
  element.style.height = alturaPictograma(element) +"px";
  console.log(element.style.height);
});

function alturaPictograma(picto){
  var elemsPicto = Array.prototype.slice.call(picto.children);
  var altura = 0;
  for (var i = 0; i<elemsPicto.length; i++) {
    altura += elemsPicto[i].clientHeight;
  }
  return altura;
}

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

function creaArea(event){
  var areaClonada = colocaElemento(event);
  areaClonada.classList.remove('col-md-6');
  areaClonada.classList.remove('draggable');
  areaClonada.classList.add('rectdraggable');
}
function colocaElemento(event){
  var elemento = event.relatedTarget;
  var posX = event.interaction.curCoords.client.x;
  var posY = event.interaction.curCoords.client.y;
  var dropZone = event.target;
  
  console.log("posx:",posX,"posy:",posY);
  var elementoClonado = elemento.cloneNode(true); 
  
  var anchoPicto = elemento.clientWidth;
  var altoPicto = elemento.clientHeight;
  elementoClonado.style.width = anchoPicto+"px";
  elementoClonado.style.height = altoPicto+"px";
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

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



interact('.draggable')  
  .draggable({
    autoScroll: true,
    // call this function on every dragmove event
    onmove: dragMoveListener,
    
    onend: function (event) {
      //console.log(event);
      if(!event.dropzone){
        console.log("no deberias moverte");
        // translate the element
        noMover(event.target);
      }
      
    }
  });

  function dragMoveListener (event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }




interact('.dropzone').dropzone({  
  // Require a 50% element overlap for a drop to be possible
  overlap: 0.50,

  ondropactivate: function (event) {
    // add active dropzone feedback
    event.target.classList.add('drop-active');
  },
  ondragenter: function (event) {
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;

    // feedback the possibility of a drop
    dropzoneElement.classList.add('drop-target');
  },
  ondragleave: function (event) {
    // remove the drop feedback style
    event.target.classList.remove('drop-target');
  },
  ondrop: function (event) {
    console.log(event);
    if(event.relatedTarget.classList.contains('draggable')){
      creaPicto(event);
      noMover(event.relatedTarget);
    }
    
    
  },
  ondropdeactivate: function (event) {
    // remove active dropzone feedback
    event.target.classList.remove('drop-active');
    event.target.classList.remove('drop-target');
  }
});

interact('.draggado')
  .draggable({
    restrict: {
      restriction: "parent",
      endOnly: true,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },
    // enable autoScroll
    autoScroll: true,

    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
    onend: function (event) {
      var textEl = event.target.querySelector('p');
    }
});



function creaPicto(event){
  var pictograma = event.relatedTarget;
  var posX = event.interaction.curCoords.client.x;
  var posY = event.interaction.curCoords.client.y;
  var dropZone = event.target;
  
  console.log("posx:",posX,"posy:",posY);
  var pictoclonado = pictograma.cloneNode(true); 
  pictoclonado.classList.remove('col-md-4');
  pictoclonado.classList.remove('draggable');
  pictoclonado.classList.add('draggado');
  var anchoPicto = pictograma.clientWidth;
  var altoPicto = pictograma.clientHeight;
  pictoclonado.style.width = anchoPicto+"px";
  pictoclonado.style.height = altoPicto+"px";
  var posicionZone = dropZone.getBoundingClientRect();
  
  pictoclonado.style.left=(posX - (anchoPicto/2)-posicionZone.left)+"px";
  pictoclonado.style.top=(posY - (altoPicto/2)-posicionZone.top)+"px";
  
  var despVer = 566*100/myHeight;
  pictoclonado.style.position="absolute";
  console.log("posfortop:",pictoclonado.style.top,"posforleft:",pictoclonado.style.left);
  noMover(pictoclonado);
  var divGrande =document.getElementById("dropzone");
  divGrande.appendChild(pictoclonado);
}

function noMover(elemento){
  elemento.style.webkitTransform =
  elemento.style.transform =
    'translate(' + 0 + 'px, ' + 0 + 'px)';

  // update the posiion attributes
  elemento.setAttribute('data-x', 0);
  elemento.setAttribute('data-y', 0);
}



////http://mathelino.com/index.php?id=64
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
  overlap: 1,

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
    console.log('event',event);
      if(event.relatedTarget.classList.contains('draggable') && event.relatedTarget.classList.contains('pictograma')){
        creaPicto(event);
        noMover(event.relatedTarget);
      }else if(event.relatedTarget.classList.contains('draggable') && event.relatedTarget.classList.contains('newArea')){
        creaArea(event);
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
    onend: function (event) {}
});


interact('.rectdraggable')
  .draggable({
    onmove: window.dragMoveListener,
    restrict: {
      restriction: 'parent',
      endOnly: true,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    }
  })
  .resizable({
    // resize from all edges and corners
    edges: { left: true, right: true, bottom: true, top: true },
    // keep the edges inside the parent
    restrict: {
      restriction: "parent",
      endOnly: true,
    },
    restrictEdges: {
      outer: 'parent',
      endOnly: true,
    },

    // minimum size
    restrictSize: {
      min: { width: 100, height: 50 },
    },
  })
  .dropzone({
    overlap: 1,
  
    ondropactivate: function (event) {
      // add active dropzone feedback
      event.target.classList.add('drop-active');
    },
    ondragenter: function (event) {
      var draggableElement = event.relatedTarget,
          dropzoneElement = event.target;
  
      // feedback the possibility of a drop
      dropzoneElement.classList.add('drop-target');
      draggableElement.classList.add('can-drop');
     // dropzoneElement.textContent = 'Dragged in';
    },
    ondragleave: function (event) {
      // remove the drop feedback style
      event.target.classList.remove('drop-target');
      event.relatedTarget.classList.remove('can-drop');
    },
    ondrop: function (event) {
      //event.relatedTarget.textContent = 'Dropped';
      console.log('event',event);
      if(event.relatedTarget.classList.contains('draggable') && event.relatedTarget.classList.contains('pictograma')){
        creaPicto(event);
        noMover(event.relatedTarget);
      }else if(event.relatedTarget.classList.contains('draggable') && event.relatedTarget.classList.contains('newArea')){
        creaArea(event);
        noMover(event.relatedTarget);
      }
    },
    ondropdeactivate: function (event) {
      // remove active dropzone feedback
      event.target.classList.remove('drop-active');
      event.target.classList.remove('drop-target');
    }
  })
  .on('resizemove', function (event) {
    var target = event.target,
        x = (parseFloat(target.getAttribute('data-x')) || 0),
        y = (parseFloat(target.getAttribute('data-y')) || 0);

    // update the element's style
    target.style.width  = event.rect.width + 'px';
    target.style.height = event.rect.height + 'px';

    // translate when resizing from top or left edges
    x += event.deltaRect.left;
    y += event.deltaRect.top;

    target.style.webkitTransform = target.style.transform =
        'translate(' + x + 'px,' + y + 'px)';

    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
    
  });

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


////http://mathelino.com/index.php?id=64
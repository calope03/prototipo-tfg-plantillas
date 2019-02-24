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
      if(event.relatedTarget.classList.contains('draggable') && event.relatedTarget.classList.contains('pictograma') && !event.relatedTarget.classList.contains('newPicto')){
        creaPicto(event);
        noMover(event.relatedTarget);
      }else if(event.relatedTarget.classList.contains('draggable') && event.relatedTarget.classList.contains('newArea')){
        creaArea(event);
        noMover(event.relatedTarget);
      }else if(event.relatedTarget.classList.contains('draggable') && event.relatedTarget.classList.contains('newPicto')){
        creaAreaPicto(event);
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
    preserveAspectRatio: true,
    // minimum size
    restrictSize: {
      min: { width: 100, height: 50 },
    },
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
    console.log('hola');
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
  
/*
----------------------------------------------------------------------------------------------------------------
*/
  
interact('.pictoDraggado')
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
    preserveAspectRatio: true,
    // minimum size
    restrictSize: {
      min: { width: 100, height: 50 },
    },
  })
  .dropzone({
    overlap: 0.2,
    accept: '.pictograma',
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
      console.log('sssssssssssss',event);
      if(event.relatedTarget.classList.contains('draggable') && event.relatedTarget.classList.contains('pictograma')){
        var pictoBlancoHijos = Array.prototype.slice.call(event.target.children);
        var pictoHijos = Array.prototype.slice.call(event.relatedTarget.children);
        //var pictohijo = Array.prototype.slice.call(picto.children)
        console.log('ASDFDASFASDFASDFASDFAFD');
        for(var i=0; i<pictoHijos.length;i++){
          if(pictoHijos[i].nodeName === 'IMG'){
            pictoBlancoHijos[i].src = pictoHijos[i].src;
            console.log('eey0');
          }
        }
      }
      
      noMover(event.relatedTarget);
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
    console.log('hola');
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  interact('.pictodraggable')
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
    overlap: 0.5,
  
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
        creaPictoAjustado(event);
        noMover(event.relatedTarget);
      }else{
        noMover(event.relatedTarget);
      };
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
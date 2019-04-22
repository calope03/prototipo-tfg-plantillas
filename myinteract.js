interact(".draggable").draggable({
  autoScroll: true,
  // call this function on every dragmove event
  onmove: dragMoveListener,

  onend: function(event) {
    console.log("terminando de arratrar", event);
    if (!event.dropzone) {
      console.log("no deberias moverte");
      noMover(event.target);
    }
  }
});

function dragMoveListener(event) {
  var target = event.target,
    // keep the dragged position in the data-x/data-y attributes
    x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx,
    y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

  // translate the element
  target.style.webkitTransform = target.style.transform =
    "translate(" + x + "px, " + y + "px)";

  // update the posiion attributes
  target.setAttribute("data-x", x);
  target.setAttribute("data-y", y);
}

/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                                      Dropzone
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

interact(".dropzone")
  .dropzone({
    // Require a 50% element overlap for a drop to be possible
    overlap: 1,

    ondropactivate: function(event) {
      // add active dropzone feedback
      event.target.classList.add("drop-active");
    },
    ondragenter: function(event) {
      var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;

      // feedback the possibility of a drop
      dropzoneElement.classList.add("drop-target");
    },
    ondragleave: function(event) {
      // remove the drop feedback style
      event.target.classList.remove("drop-target");
    },
    ondrop: function(event) {
      console.log("event", event);
      //Pictograma
      if (
        event.relatedTarget.classList.contains("draggable") &&
        event.relatedTarget.classList.contains("pictograma") &&
        !event.relatedTarget.classList.contains("newPicto")
      ) {
        creaPicto(event);
        noMover(event.relatedTarget);
      } 
      //Area
      else if (
        event.relatedTarget.classList.contains("draggable") &&
        event.relatedTarget.classList.contains("newArea")
      ) {
        creaArea(event);
        noMover(event.relatedTarget);
      }
      //Texto 
      else if (
        event.relatedTarget.classList.contains("draggable") &&
        event.relatedTarget.classList.contains("newText")
      ) {
        creaText(event);
        noMover(event.relatedTarget);
      } 
      //PictogramaNuevo
      else if (
        event.relatedTarget.classList.contains("draggable") &&
        event.relatedTarget.classList.contains("newPicto")
      ) {
        creaAreaPicto(event);
        noMover(event.relatedTarget);
      } 
      //Figura geometrica
      else if (
        event.relatedTarget.classList.contains("draggable") &&
        event.relatedTarget.classList.contains("newFig")
      ) {
        creaFigura(event);
        noMover(event.relatedTarget);
      }
    },
    ondropdeactivate: function(event) {
      // remove active dropzone feedback
      event.target.classList.remove("drop-active");
      event.target.classList.remove("drop-target");
    }
  })
  .on("tap", function(event) {
    muestraAjustes(event);
    console.log(event.type, event.target);
  });

/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                                      Pictograma draggado
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

interact(".draggado")
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
    onend: function(event) {}
  })
  .resizable({
    // resize from all edges and corners
    edges: { left: true, right: true, bottom: true, top: true },
    // keep the edges inside the parent
    restrict: {
      restriction: "parent",
      endOnly: true
    },
    restrictEdges: {
      outer: "parent",
      endOnly: true
    },
    preserveAspectRatio: true,
    // minimum size
    restrictSize: {
      min: { width: 100, height: 50 }
    }
  })
  .on("resizemove", function(event) {
    var target = event.target,
      x = parseFloat(target.getAttribute("data-x")) || 0,
      y = parseFloat(target.getAttribute("data-y")) || 0;

    //________________________________________________________________ Revisar para poner hijo p
    textFit(target.children[1]);

    // update the element's style
    target.style.width = event.rect.width + "px";
    target.style.height = event.rect.height + "px";

    // translate when resizing from top or left edges
    x += event.deltaRect.left;
    y += event.deltaRect.top;

    target.style.webkitTransform = target.style.transform =
      "translate(" + x + "px," + y + "px)";

    target.setAttribute("data-x", x);
    target.setAttribute("data-y", y);
    console.log("hola");
  })
  .on("tap", function(event) {
    muestraAjustes(event);
    console.log(event.type, event.target);
  });

/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                                      Texto Dragado
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

interact(".textDraggado")
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
    onend: function(event) {}
  })
  .resizable({
    // resize from all edges and corners
    edges: { left: true, right: true, bottom: true, top: true },
    // keep the edges inside the parent
    restrict: {
      restriction: "parent",
      endOnly: true
    },
    restrictEdges: {
      outer: "parent",
      endOnly: true
    },
    //preserveAspectRatio: true,
    // minimum size
    restrictSize: {
      min: { width: 100, height: 50 }
    }
  })
  .on("resizemove", function(event) {
    var target = event.target,
      x = parseFloat(target.getAttribute("data-x")) || 0,
      y = parseFloat(target.getAttribute("data-y")) || 0;

    //________________________________________________________________ Revisar para poner hijo p
    //textFit(target.children[1]);

    // update the element's style
    target.style.width = event.rect.width + "px";
    target.style.height = event.rect.height + "px";

    // translate when resizing from top or left edges
    x += event.deltaRect.left;
    y += event.deltaRect.top;

    target.style.webkitTransform = target.style.transform =
      "translate(" + x + "px," + y + "px)";

    target.setAttribute("data-x", x);
    target.setAttribute("data-y", y);
    console.log("hola");
  })
  .on("tap", function(event) {
    muestraAjustes(event);
    console.log(event.type, event.target);
  });

/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                              Area draggada
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

interact(".rectdraggable")
  .draggable({
    onmove: dragMoveListener,
    restrict: {
      restriction: "parent",
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
      endOnly: true
    },
    //preserveAspectRatio: true,
    restrictEdges: {
      outer: "parent",
      endOnly: true
    }

    // minimum size
    /*srestrictSize: {
      min: { width: 100, height: 50 },
    },*/
  })
  .dropzone({
    overlap: 0.5,

    ondropactivate: function(event) {
      // add active dropzone feedback
      event.target.classList.add("drop-active");
    },
    ondragenter: function(event) {
      var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;

      // feedback the possibility of a drop
      dropzoneElement.classList.add("drop-target");
      draggableElement.classList.add("can-drop");
      // dropzoneElement.textContent = 'Dragged in';
    },
    ondragleave: function(event) {
      // remove the drop feedback style
      event.target.classList.remove("drop-target");
      event.relatedTarget.classList.remove("can-drop");
    },
    ondrop: function(event) {
      //event.relatedTarget.textContent = 'Dropped';
      console.log("event", event);
      //Pictograma
      if (
        event.relatedTarget.classList.contains("draggable") &&
        event.relatedTarget.classList.contains("pictograma") &&
        !event.relatedTarget.classList.contains("newPicto")
      ) {
        creaPicto(event);
        noMover(event.relatedTarget);
      } 
      //Area
      /*else if (
        event.relatedTarget.classList.contains("draggable") &&
        event.relatedTarget.classList.contains("newArea")
      ) {
        creaArea(event);
        noMover(event.relatedTarget);
      }*/
      //Texto 
      else if (
        event.relatedTarget.classList.contains("draggable") &&
        event.relatedTarget.classList.contains("newText")
      ) {
        creaText(event);
        noMover(event.relatedTarget);
      } 
      //PictogramaNuevo
      else if (
        event.relatedTarget.classList.contains("draggable") &&
        event.relatedTarget.classList.contains("newPicto")
      ) {
        creaAreaPicto(event);
        noMover(event.relatedTarget);
      } 
      //Figura geometrica
      else if (
        event.relatedTarget.classList.contains("draggable") &&
        event.relatedTarget.classList.contains("newFig")
      ) {
        creaFigura(event);
        noMover(event.relatedTarget);
      }
    },
    ondropdeactivate: function(event) {
      // remove active dropzone feedback
      event.target.classList.remove("drop-active");
      event.target.classList.remove("drop-target");
    }
  })
  .on("resizemove", function(event) {
    var target = event.target,
      x = parseFloat(target.getAttribute("data-x")) || 0,
      y = parseFloat(target.getAttribute("data-y")) || 0;

    // update the element's style
    target.style.width = event.rect.width + "px";
    target.style.height = event.rect.height + "px";

    // translate when resizing from top or left edges
    x += event.deltaRect.left;
    y += event.deltaRect.top;

    target.style.webkitTransform = target.style.transform =
      "translate(" + x + "px," + y + "px)";

    target.setAttribute("data-x", x);
    target.setAttribute("data-y", y);
  })
  .on("tap", function(event) {
    muestraAjustes(event);
    console.log(event.type, event.target);
  });

/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                              Figura geometrica
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

interact(".figdragada")
  .draggable({
    onmove: dragMoveListener,
    restrict: {
      restriction: "parent",
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
      endOnly: true
    },
    preserveAspectRatio: true,
    restrictEdges: {
      outer: "parent",
      endOnly: true
    }

    // minimum size
    /*srestrictSize: {
      min: { width: 100, height: 50 },
    },*/
  })
  .on("resizemove", function(event) {
    var target = event.target,
      x = parseFloat(target.getAttribute("data-x")) || 0,
      y = parseFloat(target.getAttribute("data-y")) || 0;

    // update the element's style
    target.style.width = event.rect.width + "px";
    target.style.height = event.rect.height + "px";

    // translate when resizing from top or left edges
    x += event.deltaRect.left;
    y += event.deltaRect.top;

    target.style.webkitTransform = target.style.transform =
      "translate(" + x + "px," + y + "px)";

    target.setAttribute("data-x", x);
    target.setAttribute("data-y", y);
  })
  .on("tap", function(event) {
    muestraAjustes(event);
    console.log(event.type, event.target);
  });

/*

Pictograma de nuevo
----------------------------------------------------------------------------------------------------------------
*/

interact(".pictoDraggado")
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
    onend: function(event) {}
  })
  .resizable({
    // resize from all edges and corners
    edges: { left: true, right: true, bottom: true, top: true },
    // keep the edges inside the parent
    restrict: {
      restriction: "parent",
      endOnly: true
    },
    restrictEdges: {
      outer: "parent",
      endOnly: true
    },
    preserveAspectRatio: true,
    // minimum size
    restrictSize: {
      min: { width: 100, height: 50 }
    }
  })
  .dropzone({
    overlap: 0.2,
    accept: ".pictograma",
    ondropactivate: function(event) {
      // add active dropzone feedback
      event.target.classList.add("drop-active");
    },
    ondragenter: function(event) {
      var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;

      // feedback the possibility of a drop
      dropzoneElement.classList.add("drop-target");
      draggableElement.classList.add("can-drop");
      // dropzoneElement.textContent = 'Dragged in';
    },
    ondragleave: function(event) {
      // remove the drop feedback style
      event.target.classList.remove("drop-target");
      event.relatedTarget.classList.remove("can-drop");
    },
    ondrop: function(event) {
      if (
        event.relatedTarget.classList.contains("draggable") &&
        event.relatedTarget.classList.contains("pictograma")
      ) {
        var pictoBlancoHijos = Array.prototype.slice.call(
          event.target.children
        );
        var pictoHijos = Array.prototype.slice.call(
          event.relatedTarget.children
        );
        //var pictohijo = Array.prototype.slice.call(picto.children)
        for (var i = 0; i < pictoHijos.length; i++) {
          if (pictoHijos[i].nodeName === "IMG") {
            pictoBlancoHijos[i].src = pictoHijos[i].src;
          }
          else if (pictoHijos[i].nodeName === "P") {
            pictoBlancoHijos[i].innerText = pictoHijos[i].innerText;
          }
        }
      }
      noMover(event.relatedTarget);
    },
    ondropdeactivate: function(event) {
      // remove active dropzone feedback
      event.target.classList.remove("drop-active");
      event.target.classList.remove("drop-target");
    }
  })
  .on("resizemove", function(event) {
    console.log("asdfsdfasdf", event);

    var target = event.target,
      x = parseFloat(target.getAttribute("data-x")) || 0,
      y = parseFloat(target.getAttribute("data-y")) || 0;

    console.log("element", target.offsetHeight);
    console.log("nuevo", event.rect.height);

    ////__________________________________________________________________________REVISAR
    textFit(target.children[1]);
    // update the element's style
    target.style.width = event.rect.width + "px";
    target.style.height = event.rect.height + "px";

    // translate when resizing from top or left edges
    x += event.deltaRect.left;
    y += event.deltaRect.top;

    target.style.webkitTransform = target.style.transform =
      "translate(" + x + "px," + y + "px)";

    target.setAttribute("data-x", x);
    target.setAttribute("data-y", y);

    //target.style.fontSize = "smaller";
    console.log("hola");
  });

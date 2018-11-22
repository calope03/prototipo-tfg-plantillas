var picto = document.getElementById("box-one1");
console.log();

interact('.draggable')  
  .draggable({
    // enable inertial throwing
    //inertia: true,
    snap: {
            targets: [
                interact.createSnapGrid({
                    x: 30,
                    y: 30,
                    // limit to the container dimensions
                    limits: {
                        left: 30,
                        top: 30,
                        right: 30,
                        bottom: 30,
                    },
                })
            ],
            relativePoints: [
            	{ x: 0, y: 0 }
            ]
        },
    
    // keep the element within the area of it's parent
   /* restrict: {
      //restriction: "parent",
      endOnly: true,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },*/
    // enable autoScroll
    autoScroll: true,
    // call this function on every dragmove event
    onmove: dragMoveListener,
    
    onend: function (event) {
      //console.log(event);
      if(!event.dropzone){
        console.log("no deberias moverte");
        // translate the element
        event.target.style.webkitTransform =
        event.target.style.transform =
          'translate(' + 0 + 'px, ' + 0 + 'px)';
    
        // update the posiion attributes
        event.target.setAttribute('data-x', 0);
        event.target.setAttribute('data-y', 0);
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



// enable draggables to be dropped into this
interact('.dropzone').dropzone({  
  // Require a 50% element overlap for a drop to be possible
  overlap: 0.50,

  // listen for drop related events:

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
    //event.relatedTarget.textContent = 'Dropped';
    event.relatedTarget.classList.add('resize-drag');
    console.log(event);
  },
  ondropdeactivate: function (event) {
    // remove active dropzone feedback
    event.target.classList.remove('drop-active');
    event.target.classList.remove('drop-target');
  }
});
//var myajustes = (function() {
var dropzone = document.getElementById("dropzone");
var ajustes;

dropzone.addEventListener("dblclick", function () {
  muestraAjustes(event);
});
function ocultaPaneles() {
  var panelesAjustes = Array.prototype.slice.call(document.querySelectorAll(".panelAjustes"));
  panelesAjustes.forEach(function (elemento) {
    elemento.style.display = 'none';
  });
};
//ocultaPaneles();
function muestraAjustes(event) {
  var panelDerecho = document.getElementById('panelDerecha');
  var classTarget = event.target.classList;
  console.log('classtarget', classTarget);
  ocultaPaneles();
  console.log(ajustes);
  if (ajustes) {
    ajustes.stop(true);
  }
  if (classTarget.contains("dropzone") && tipoDelContenido==="plantilla") {
    ajustes = new ajustesDropzone();
    ajustes.init();
  } else if (classTarget.contains("pictogramaHover")&& tipoDelContenido==="plantilla") {
    ajustes = new ajustesPicto(event.target.parentElement);
    ajustes.init();
  } else if (classTarget.contains("areaHover")&& tipoDelContenido==="plantilla") {
    ajustes = new ajustesArea(event.target.parentElement);
    ajustes.init();
  } else if (classTarget.contains("newFig")&& tipoDelContenido==="plantilla") {
    ajustes = new ajustesFigura(event.target);
    ajustes.init();
  } else if (classTarget.contains("newText")&& tipoDelContenido==="plantilla") {
    ajustes = new ajustesTexto(event.target);
    ajustes.init();
  }else if (classTarget.contains("pictogramaHover")&& tipoDelContenido==="tablero") {
    ajustes = new ajustesPictoTablero(event.target.parentElement);
    ajustes.init();
  }else if (classTarget.contains("areaHover")&& tipoDelContenido==="tablero") {
    ajustes = new ajustesAreaTablero(event.target.parentElement);
    ajustes.init();
  }else if (classTarget.contains("newFig")&& tipoDelContenido==="tablero") {
    ajustes = new ajustesFiguraTablero(event.target);
    ajustes.init();
  } else if (classTarget.contains("newText")&& tipoDelContenido==="tablero" && event.target.dataset.editable) {
    ajustes = new ajustesTextoTablero(event.target);
    ajustes.init();
  }
}

//})();


/*https://developer.mozilla.org/es/docs/Web/HTML/Elemento/input/color

https://stackoverflow.com/questions/40064087/html-div-tag-input-color-value-control-for-new-html-div-element
*/
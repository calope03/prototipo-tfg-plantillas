function navigate(path) {
  var current = window.location.href;
  window.location.href = current.replace(/#(.*)$/, "") + "#" + path;
}


function guarda(event){
  let dropzone = document.getElementById("dropzone");
    let dropzoneOuter = dropzone.outerHTML;
    let hash = hashActual();
    let tipo;
    let id = guid();
    let tituloPlantilla = document.getElementById('nombrePlantilla').value; 
    let tamanoDropzone = {
      alto: dropzone.clientHeight,
      ancho: dropzone.clientWidth
    };
    var miniatura = "";
    html2canvas(dropzone, {
      onrendered(canvas) {
        miniatura = canvas.toDataURL();
      }
    });
    //miniatura =  document.getElementById('miniatura').src;
    
    if (hash === "nueva-plantilla") {
      tipo = "plantilla";
      //navigate(id);
    } else if (hash === "nuevo-tablero") {
      tipo = "tablero";
      //navigate(id);
    } else if (hashValido.test(hash)) {
      id = hash;
      let elemento = JSON.parse(localStorage.getItem(id));
      tipo = elemento.tipo;
      console.log("id", id);
    }
    setTimeout(function() {
      let datosAExportar = {
        id: id,
        contenido: dropzoneOuter,
        tamano: tamanoDropzone,
        titulo: tituloPlantilla,
        tipo: tipo,
        miniatura: miniatura
      };
      var datos = JSON.stringify(datosAExportar);
      localStorage.setItem(id, datos);
      navigate(id);
    }, 10);

    console.log("guardado");
}


/*

function guardamuchos(){
  for(let i=0;i<500;i++){
  document.getElementById("botonDescarga").click;
}
}
*/

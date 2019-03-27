const hashValido = /[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}/;
document.getElementById("botonDescarga").addEventListener('click', function(event){
   let dropzone = document.getElementById("dropzone");
   let dropzoneOuter = document.getElementById("dropzone").outerHTML;
   let hash = hashActual();
   let tipo;
   let id = guid();
   let tamanoDropzone = {
       alto: dropzone.clientHeight,
       ancho: dropzone.clientWidth
   }
   if(hash === "nueva-plantilla"){
      tipo="plantilla";
   }else if(hash === "nuevo-tablero"){
      tipo="tablero";
   }else if(hashValido.test(hash)){
     id = hash;
     console.log('id',id)
   }
   let datosAExportar = {
       id: id,
       contenido: dropzoneOuter,
       tamano: tamanoDropzone,
       titulo: "Titulo sin determinar",
       tipo: tipo
   } 
   var datos = JSON.stringify(datosAExportar);
   localStorage.setItem(id, datos);
   console.log('guardado');
});





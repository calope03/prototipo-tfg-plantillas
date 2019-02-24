document.getElementById("botonDescarga").addEventListener('click', function(event){
   let dropzone = document.getElementById("dropzone").outerHTML;
   let datosAExportar = {
       contenido: dropzone
   } 
   var datos = JSON.stringify(datosAExportar);
   const blob = new Blob([datos], {type: "application/json"});
   const link = document.createElement('a');
   document.body.appendChild(link);
   link.style.display = "none";
   link.href = window.URL.createObjectURL(blob);
   link.download = 'archivo.json';
   link.click();
   window.URL.revokeObjectURL(link.href);
   console.log('descargando');
});
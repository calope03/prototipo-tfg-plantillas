document.getElementById("botonDescarga").addEventListener('click', function(event){
   let dropzone = document.getElementById("dropzone").outerHTML;
   let datosAExportar = {
       contenido: dropzone,
       tipo: "plantilla"
   } 
   let tipo = hashActual();
   console.log(tipo, guid());
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

function hashActual () {
    return window.location.href.split('#')[1] || '';
}

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}
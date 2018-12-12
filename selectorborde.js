const colors = ['green','maroon','red','orange','yellow','olive','purple','fuchsia','white','lime','navy','blue','aqua','teal','black','silver',' gray'];
var selectorColor = document.getElementById("color-borde");

selectorColor.onclick = function(evento){
  if(evento.isTrusted){
    var clases = evento.target.classList;
    for(var i = 0; i< clases.length; i++){
      if(colors.includes(clases[i])){
        dropzone.style.borderColor = clases[i];
        break;
      }
    }
  }
}



var dropzone = document.getElementById("dropzone");
const colors = ['green','maroon','red','orange','yellow','olive','purple','fuchsia','white','lime','navy','blue','aqua','teal','black','silver','gray',
'pink','peachpuff','lightgoldenrodyellow','palegreen','paleturquoise','lightsteelblue','thistle'];
var colorBorde = document.getElementById("color-borde");
var colorFondo = document.getElementById("color-fondo");

colorBorde.onclick = function(evento){
  cambiaColor(evento,"borderColor");
}

colorFondo.onclick = function(evento){
  cambiaColor(evento,"backgroundColor");
}

function cambiaColor(evento,tipo){
  if(evento.isTrusted){
    var clases = evento.target.classList;
    for(var i = 0; i< clases.length; i++){
      if(colors.includes(clases[i])){
        dropzone.style[tipo] = clases[i];
        break;
      }
    }
  }
}

var dropzone = document.getElementById("dropzone");
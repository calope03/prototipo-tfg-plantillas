
function hashActual () {
    return window.location.href.split('#')[1] || '';
}





window.addEventListener("hashchange", function(event){
    //console.log("Hash actual:", hashActual(),"event",event);
    /*var elems = document.querySelectorAll(".active");
        [].forEach.call(elems, function(el) {
            el.classList.remove("active");
    });
    document.getElementById(hashActual()).classList.add('active');*/
    listaByHash();
   
    console.log(hashActual())
}, false);


function listaByHash(){
    cargarLocalStorage();
    if(hashActual() === "plantillas-privadas"){
        listaPlantillasPrivadas();
    }else if(hashActual()==="tableros-privados"){
        listaTablerosPrivados();
    }else if(hashActual()==="plantillas-publicas"){
        listaPlantillasPublicas();
    }else if(hashActual()==="tableros-publicos"){
        listaTablerosPrublicos();
    }
}

listaByHash();
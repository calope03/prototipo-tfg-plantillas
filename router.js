
function hashActual () {
    return window.location.href.split('#')[1] || '';
}

window.addEventListener("hashchange", function(event){
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
    }else{
        history.replaceState({},'redireccion','index.html#plantillas-privadas');
        listaPlantillasPrivadas();
    }
}

listaByHash();
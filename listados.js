const plantillasPrivadas = [];

const tablerosPrivados = []; 

const contentSlctr = document.getElementById('content');

const ref = firebase.database().ref();

const plantillasRef = ref.child("plantillas");

const tablerosRef = ref.child("tableros");


function cargarLocalStorage(){
    plantillasPrivadas.length = 0;
    tablerosPrivados.length = 0;
    for ( var i = 0; i < localStorage.length; i++ ) {
        let elemento = JSON.parse(localStorage.getItem(localStorage.key(i)));
        if(elemento.tipo === "plantilla"){
            plantillasPrivadas.push(elemento);
        }else if(elemento.tipo === "tablero"){
            tablerosPrivados.push(elemento);
        }
    }
}

function listaPlantillasPrivadas(){
    let resultadosHTML = `<div class="table-responsive"><table id = "contenidoTabla" class="table table-striped"><thead><tr><th>Titulo</th><th colspan="5">Acciones</th></tr></thead><tbody>`;
    plantillasPrivadas.forEach(function(element){
        resultadosHTML += `<tr data-id="${element.id}">
                            <td>${element.titulo}</td>
                            <td class="option" data-action="publicar">Publicar</td>
                            <td class="option" data-action="tablero">Utilizar como tablero</td>
                            <td class="option" data-action="duplicar">Duplicar</td>
                            <td class="option" data-action="editar"><a href="edit.html#${element.id}">Editar</a></td>
                            <td class="option" data-action="eliminar">Eliminar</td>
                          </tr>`;
    });
    resultadosHTML+=`</tbody></table></div>`;
    contentSlctr.innerHTML = resultadosHTML; 
    document.getElementById('contenidoTabla').addEventListener('click', opciones);
}

function listaTablerosPrivados(){
    let resultadosHTML = `<div class="table-responsive"><table id = "contenidoTabla" class="table table-striped"><thead><tr><th>Titulo</th><th colspan="4">Acciones</th></tr></thead><tbody>`;
    tablerosPrivados.forEach(function(element){
        resultadosHTML += `<tr data-id="${element.id}">
                            <td>${element.titulo}</td>
                            <td class="option" data-action="publicar">Publicar</td>
                            <td class="option" data-action="duplicar">Duplicar</td>
                            <td class="option" data-action="editar"><a href="edit.html#${element.id}">Editar</a></td>
                            <td class="option" data-action="eliminar">Eliminar</td>
                          </tr>`;
    });
    resultadosHTML+=`</tbody></table></div>`;
    contentSlctr.innerHTML = resultadosHTML; 
    document.getElementById('contenidoTabla').addEventListener('click', opciones);
}

function listaTablerosPrublicos(){
    tablerosRef.on("value", snapshot => {
         let resultadosHTML = `<div class="table-responsive"><table id = "contenidoTabla" class="table table-striped"><thead><tr><th>Titulo</th><th colspan="2">Acciones</th></tr></thead><tbody>`;
        snapshot.forEach(function(element){
            element = element.val();
            resultadosHTML += `<tr data-id="${element.id}">
                            <td>${element.titulo}</td>
                            <td class="option" data-action="privado">Crear copia privada</td>
                            <td class="option" data-action="ver">Ver</td>
                          </tr>`;
            console.log(resultadosHTML);
        });
        console.log(resultadosHTML)
        resultadosHTML+=`</tbody></table></div>`;
        contentSlctr.innerHTML = resultadosHTML; 
        document.getElementById('contenidoTabla').addEventListener('click', opciones);
    }, errorObject => {
      console.log(`Fallo en lectura de datos: ${errorObject.code}`);
    });
}

function listaPlantillasPublicas(){
    plantillasRef.on("value", snapshot => {
         let resultadosHTML = `<div class="table-responsive"><table id = "contenidoTabla" class="table table-striped"><thead><tr><th>Titulo</th><th colspan="3">Acciones</th></tr></thead><tbody>`;
        snapshot.forEach(function(element){
            element = element.val();
            resultadosHTML += `<tr data-id="${element.id}">
                            <td>${element.titulo}</td>
                            <td class="option" data-action="privado">Crear copia privada</td>
                            <td class="option" data-action="tableropublico">Utilizar como tablero</td>
                            <td class="option" data-action="ver">Ver</td>
                          </tr>`;
            console.log(resultadosHTML);
        });
        console.log(resultadosHTML)
        resultadosHTML+=`</tbody></table></div>`;
        contentSlctr.innerHTML = resultadosHTML; 
        document.getElementById('contenidoTabla').addEventListener('click', opciones);
    }, errorObject => {
      console.log(`Fallo en lectura de datos: ${errorObject.code}`);
    });
}

function opciones(event){
    console.log(event);
    if(event.target.dataset.action === "duplicar"){
        duplicar(event.target.parentNode.dataset.id)
    }else if(event.target.dataset.action === "publicar"){
        publicar(event.target.parentNode.dataset.id)
    }else if(event.target.dataset.action === "tablero"){
        utilizarComoTablero(event.target.parentNode.dataset.id)
    }else if(event.target.dataset.action === "eliminar"){
        eliminar(event.target.parentNode.dataset.id)
    }
}

function utilizarComoTablero(id){
    let elemento = JSON.parse(localStorage.getItem(id));
    elemento.tipo = "tablero";
    elemento.id = guid();
    localStorage.setItem(elemento.id, JSON.stringify(elemento));
    listaByHash();
}

function eliminar(id){
    localStorage.removeItem(id);
    listaByHash();
}

function publicar(id){
    let elementoPublicar = JSON.parse(localStorage.getItem(id));
    if(elementoPublicar.tipo === "plantilla"){
        plantillasRef.child(id).set(elementoPublicar);
    }else if(elementoPublicar.tipo === "tablero"){
        tablerosRef.child(id).set(elementoPublicar);
    }
}

function duplicar(id){
    let elementoDuplicar = JSON.parse(localStorage.getItem(id));
    elementoDuplicar.id = guid();
    elementoDuplicar.titulo += "-copia";
    localStorage.setItem(elementoDuplicar.id, JSON.stringify(elementoDuplicar));
    
    if(elementoDuplicar.tipo === "plantilla"){
        plantillasPrivadas.push(elementoDuplicar);
    }
    listaByHash();
}
console.log('plantillas', plantillasPrivadas,'tableros' , tablerosPrivados)


/*

Funciones de listado segun el hash  y recorrer el contenido de localStorage y generar el html y filtrar por el tipo del hash para generar el html

*/
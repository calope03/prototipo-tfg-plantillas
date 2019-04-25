const hashValido = /[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}/;
function hashActual() {
    return window.location.href.split("#")[1] || "";
}

if (hashValido.test(hashActual())) {
    let content = document.getElementById('dropzone');
    let elemento = JSON.parse(localStorage.getItem(hashActual()));
    console.log(elemento)
    content.outerHTML = elemento.contenido;
} else {
    history.replaceState({},'redireccion','index.html#plantillas-privadas');
    listaPlantillasPrivadas();
} 
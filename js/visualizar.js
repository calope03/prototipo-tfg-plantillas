const hashValido = /[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}/;

var elemento;
 
function hashActual() {
    return window.location.href.split("#")[1] || "";
}

if (hashValido.test(hashActual())) {
    let content = document.getElementById('dropzone');
    elemento = JSON.parse(localStorage.getItem(hashActual()));
    if(elemento){
        //console.log(elemento)
        content.outerHTML = elemento.contenido;
    }
    else{
        const ref = firebase.database().ref();
        const plantillasRef = ref.child("plantillas/"+hashActual());
        console.log(plantillasRef);
        plantillasRef.once("value", snapshot => {
            if(snapshot.val()){
                elemento = snapshot.val();
                content.outerHTML = snapshot.val().contenido;
            }
          }, errorObject => {
            console.log(`Fallo en lectura de datos: ${errorObject.code}`);
        });
    }
    setTimeout(function(){
        if(!elemento){
            //console.log("fasdgfdsfa")
            const ref = firebase.database().ref();
            const plantillasRef = ref.child("tableros/"+hashActual());
            console.log(plantillasRef);
            plantillasRef.once("value", snapshot => {
                if(snapshot.val()){
                    elemento = snapshot.val();
                    content.outerHTML = snapshot.val().contenido;
                }
            }, errorObject => {
                console.log(`Fallo en lectura de datos: ${errorObject.code}`);
            });
        }
    },100)
    
} else {
    history.replaceState({},'redireccion','index.html#plantillas-privadas');
    listaPlantillasPrivadas();
} 
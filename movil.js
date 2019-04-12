function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

if(isMobileDevice()){
    //let body = document.querySelector('body');
    var btns =  `<button type="button" id="btnUp" class="btnUp btn btn-default btn-circle btn-xl"><i class="btnUp fas fa-chevron-up fa-4x"></i></button>
                <button type="button" id="btnDown" class="btnDown btn btn-default btn-circle btn-xl"><i class="btnDown fas fa-chevron-down fa-4x"></i></button>`;
    document.getElementById('buttonsUpandDown').innerHTML = btns;  
}

document.getElementById('buttonsUpandDown').addEventListener('mousedown', subirObajar);

function subirObajar(event){
    if(event.target.classList.contains("btnUp")){
        console.log('subiendo');
        window.scrollBy({
            top: -100,
            left: 0,
            behavior: 'smooth'
          });
    }else if(event.target.classList.contains("btnDown")){
        console.log('bajajndo');
        window.scrollBy({
            top: 100,
            left: 0,
            behavior: 'smooth'
          });
    }
    console.log(event);
}
/*
scroll({
    top: 100,
    left: 100,
    behavior: 'smooth'
  });*/
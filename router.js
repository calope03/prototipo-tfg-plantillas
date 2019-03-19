
function hashActual () {
    return window.location.href.split('#')[1] || '';
}

function navigate (path) {
  var current = window.location.href;
  window.location.href = current.replace(/#(.*)$/, '') + '#' + path;
}



window.addEventListener("hashchange", function(event){
    //console.log("Hash actual:", hashActual(),"event",event);
    var elems = document.querySelectorAll(".active");
        [].forEach.call(elems, function(el) {
            el.classList.remove("active");
    });
    document.getElementById(hashActual()).classList.add('active');
}, false);

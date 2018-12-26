var dropzone = document.getElementById("dropzone");

dropzone.addEventListener("mousedown", function(){
    console.log('mousedown');
    flag = 0;
});
dropzone.addEventListener("mousemove", function(){
    console.log('mousemove');
    flag = 1;
});
dropzone.addEventListener("mouseup", function(){
    console.log('mouseup');
    if(flag === 0){
        console.log("click");
        muestraAjustes(event)
    }
    else if(flag === 1){
        console.log("drag");
    }
}); 

function muestraAjustes(event){
    console.log('click dropzone',event);
}

///https://stackoverflow.com/questions/6042202/how-to-distinguish-mouse-click-and-drag

var flag = 0;
//var element = xxxx;

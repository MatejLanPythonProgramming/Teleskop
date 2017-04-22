var active = false;
var circle = document.getElementById("controller");

function test(event){
    if (active){
        var x = event.clientX;
        var y = event.clientY;
        circle.style.left = x - 45;
        circle.style.top = y - 10;
    }
}

function toggle(){
    active = !active
    if (active){
        circle.style.visibility = "visible";
    }else{
        circle.style.visibility = "hidden";
    }
}

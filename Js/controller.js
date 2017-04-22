var joystick = false;
var circle = document.getElementById("controller");

function test(event){
    if (joystick && !followMode){
        var x = event.clientX;
        var y = event.clientY;
        circle.style.left = x - 45;
        circle.style.top = y - 50;
    }
}

function toggleJoystick(event){
    joystick = !joystick
    if (joystick && !followMode){
        circle.style.visibility = "visible";
        circle.style.left = event.clientX - 45;
        circle.style.top = event.clientY - 50;
    }else{
        circle.style.visibility = "hidden";
    }
}

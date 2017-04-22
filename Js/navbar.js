var followMode = false;

function followPlanet(planet){
    var button = document.getElementById("followMode")
    if (followMode){
        button.innerHTML = planet
    }else{
        button.innerHTML = "OFF"
    }

}
function toggleFollowMode(){
    followMode = !followMode;
    followPlanet("ON")
}

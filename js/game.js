// javascript library for simple game development
document.getElementById('level_title').innerHTML = 'Start het spel';

var HasKey = false;
var HasFlashLight = false;
var HasCard = false;
var clicked = false;
var Positionsetter = x + "%" + y + "%";
var y = 75.5;
var x = 100;
var LevelX = 1;
var LevelY = 1;
var ButtonUP = document.getElementById('ButtonUp');
var ButtonRight = document.getElementById('ButtonRight');
var ButtonLeft = document.getElementById('ButtonLeft');
var ButtonDown = document.getElementById('ButtonDown');
var LevelXY = 'Level' + LevelX + LevelY;
ButtonUP.setAttribute("onClick", "MoveUP();");
ButtonLeft.setAttribute("onClick", "MoveLeft();");
ButtonDown.setAttribute("onClick", "MoveDown();");
ButtonRight.setAttribute("onClick", "MoveRight();");


ButtonStart.innerHTML = '&#9889;';
ButtonRight.style.fontSize = '0';
ButtonUP.style.fontSize = '0';
ButtonDown.style.fontSize = '0';
ButtonLeft.style.fontSize = '0';
function moved() {
    var LevelXY = 'Level' + LevelX + LevelY;
    //right
    if (LevelX == 1) {
        document.getElementById("ButtonRight").disabled = true;
    }
    else{
        document.getElementById("ButtonRight").disabled = false;
    }
    //left
    if (LevelX == 3) {

        document.getElementById("ButtonLeft").disabled = true;
    }
    else{
        document.getElementById("ButtonLeft").disabled = false;
    }
    //Down
    if (LevelY == 1){
        document.getElementById("ButtonDown").disabled = true;
    }
    else{
        document.getElementById("ButtonDown").disabled = false;
    }
    //UP
    if (LevelY == 3){
        document.getElementById("ButtonUp").disabled = true;
    }
    else{
        document.getElementById("ButtonUp").disabled = false;
    }

    console.log(LevelXY);
    console.log(LevelX);
    eval(''+LevelXY+ '()');
    document.getElementById('level_title').innerHTML = LevelXY;
    var Positionsetter = x + "%" + y + "%";
}

function MoveLeft() {

    var a = 0;
    window.setInterval(frame, 50);
    console.log("now moving left");

    function frame() {

        if (a == 51) {
            a++;
            console.log("Animation finished");
            console.log(a);
            LevelX++;
            moved();

            

        }
        else if (a < 51) {
            var Positionsetter = x + "%" + y + "%";
            a++;
            x--;
            document.body.style.backgroundPosition = Positionsetter;
            console.log(x);
            console.log(Positionsetter);
            console.log(a);
        }
    }
}

function MoveRight() {

    var a = 0;
    window.setInterval(frame, 50);
    console.log("now moving right");

    function frame() {

        if (a == 51) {
            LevelX--;
            a++;
            console.log("Animation finished");
            console.log(a);
            moved();
        }
        else if (a < 51) {

            a++;
            x++;
            var Positionsetter = x + "%" + y + "%";
            document.body.style.backgroundPosition = Positionsetter;
            console.log(x);
            console.log(Positionsetter);
            console.log(a);
        }
    }
}

function MoveDown() {

    var a = 0;
    window.setInterval(frame, 50);
    console.log("now moving down");

    function frame() {

        if (a == 38) {
            LevelY--;
            a++;
            console.log("Animation finished");
            console.log(a);
            moved();
        }
        else if (a < 38) {
            var Positionsetter = x + "%" + y + "%";
            a++;
            y++;
            document.body.style.backgroundPosition = Positionsetter;
            console.log(x);
            console.log(Positionsetter);
            console.log(a);
        }
    }
}

function MoveUP() {

    var a = 0;
    window.setInterval(frame, 50);
    console.log("now moving left");

    function frame() {

        if (a == 38) {
            a++;
            LevelY++;
            console.log("Animation finished");
            console.log(a);
            moved();
        }
        else if (a < 38) {
            var Positionsetter = x + "%" + y + "%";
            a++;
            y--;
            document.body.style.backgroundPosition = Positionsetter;
            console.log(x);
            console.log(Positionsetter);
            console.log(a);
        }
    }
}

function Start() {
    document.body.style.backgroundImage = "url('img/plan.png')";
    document.body.style.backgroundSize = "265%";
    var Positionsetter = x + "%" + y + "%";
    document.body.style.backgroundPosition = Positionsetter;
    console.log(Positionsetter);
    Level11();
    moved();
    ButtonLeft.innerHTML = '&larr;';
    ButtonRight.style.fontSize = '200px';
    ButtonUP.style.fontSize = '200px';
    ButtonDown.style.fontSize = '200px';
    ButtonLeft.style.fontSize = '200px';
    ButtonStart.style.fontSize = "0";

}

function Level11() {



}

function Level21() {


}

function Level31() {

    console.log("Level 3!");


}

function Level12() {
    //button stuff


}

function Level22() {
    //button stuff



    //console
    console.log("Level 3!");


}

function Level32() {
    //console
    console.log("Level1()");
    console.log("test()");


}
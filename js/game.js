// javascript library for simple game development
//Variables
var HasKeySmall = false;
var HasKeyBig = false;
var HasFlashLight = false;
var HasCard = false;
var bugtest = false;
var y = 100;
var x = 100;
var LevelX = 1;
var LevelY = 1;
var ButtonUP = document.getElementById('ButtonUp');
var ButtonRight = document.getElementById('ButtonRight');
var ButtonLeft = document.getElementById('ButtonLeft');
var ButtonDown = document.getElementById('ButtonDown');
var ButtonBLOCKUP = document.getElementById('ButtonBLOCKUP');
var StartButton = document.getElementById('ButtonStart');
var LevelXY = 'Level' + LevelX + LevelY;
var animation = 1;
var D = 0;
var Skin = "char";
var Speed = 50;
if(bugtest == true){
  Bugtest();
}


document.getElementById("Char").setAttribute("style", "display: none");
//Buttons
ButtonUP.setAttribute("onClick", "MoveUP();");
ButtonLeft.setAttribute("onClick", "MoveLeft();");
ButtonDown.setAttribute("onClick", "MoveDown();");
ButtonRight.setAttribute("onClick", "MoveRight();");
ButtonBLOCKUP.setAttribute("style", "display: none;");


//Button Styling
ButtonRight.style.fontSize = '0';
ButtonUP.style.fontSize = '0';
ButtonDown.style.fontSize = '0';
ButtonLeft.style.fontSize = '0';


function Start() {
    document.body.style.backgroundImage = "url('img/plan.png')";
    document.body.style.backgroundSize = "300%";
    var Positionsetter = x + "%" + y + "%";
    document.body.style.backgroundPosition = Positionsetter;
    document.getElementById("Char").setAttribute("style", "display: block");
    StartButton.setAttribute("style", "display: none; background-color: none; border-color: none; ");
    Level11();
    moved();
    ButtonRight.style.fontSize = '200px';
    ButtonUP.style.fontSize = '200px';
    ButtonDown.style.fontSize = '200px';
    ButtonLeft.style.fontSize = '200px';
    ButtonStart.style.fontSize = "0";

}

function Moving() {
    if(bugtest == true){
        document.getElementById('UpRIGHT').innerHTML = "X:" + x + "Y:" + y;
    }
    document.getElementById("ButtonRight").disabled = true;
    document.getElementById("ButtonLeft").disabled = true;
    document.getElementById("ButtonDown").disabled = true;
    document.getElementById("ButtonUp").disabled = true;
    document.getElementById("ButtonMiddle").disabled = true;
    document.getElementById("ButtonBLOCKUP").disabled = true;
    document.getElementById("KEY").setAttribute("style", "display: none;");
    document.getElementById("CHEST").setAttribute("style", "display: none;");
    document.getElementById("ButtonBLOCKUP").setAttribute("style", "display: none;");
    var Positionsetter = x + "%" + y + "%";
    document.body.style.backgroundPosition = Positionsetter;
    console.log("TEST OM TE LOPEN");
    console.log(D);
    if (D == 3) {
        document.getElementById("Char").src = "img/" + Skin + "2.png";

    }
    if (D == 6) {
        document.getElementById("Char").src = "img/" + Skin + "1.png";
        D = 0;
    }
    if (x == 49 && y < 48 && y > 8){
        document.getElementById("Char").setAttribute("style", "display: none;");
        console.log("IVINISBLE");

    }
    else{
        console.log("visible");
        document.getElementById("Char").setAttribute("style", "display: block;");
        if( y < 9){
            document.getElementById("Char").setAttribute("style", "width: 300px;");
        }
        else{
            document.getElementById("Char").setAttribute("style", "width: 50px;");
        }
    }

}

function moved() {
    document.getElementById("Char").setAttribute("style", "display: block;");
    var LevelXY = 'Level' + LevelX + LevelY;
    if (LevelX == 1 || LevelY == 2) {
        document.getElementById("ButtonRight").disabled = true;
    }
    else {
        document.getElementById("ButtonRight").disabled = false;
    }
    //left
    if (LevelX == 3 || LevelY == 2) {

        document.getElementById("ButtonLeft").disabled = true;
    }
    else {
        document.getElementById("ButtonLeft").disabled = false;
    }
    //Down
    if (LevelY == 1 || LevelY == 3 && LevelX != 2) {
        document.getElementById("ButtonDown").disabled = true;
    }
    else {
        document.getElementById("ButtonDown").disabled = false;
    }
    //UP
    if (LevelY == 3 || LevelY == 2 && LevelX != 2) {
        document.getElementById("ButtonUp").disabled = true;
    }
    else {
        document.getElementById("ButtonUp").disabled = false;
    }
    if( y < 9){
        document.getElementById("Char").setAttribute("style", "width: 300px;");
    }
    else{
        document.getElementById("Char").setAttribute("style", "width: 50px;");
    }
    console.log(x + "+" + y);
    eval('' + LevelXY + '()');
    document.getElementById('level_title').innerHTML = LevelXY;
    document.getElementById("Char").src = "img/"+Skin+".png";
    var Positionsetter = x + "%" + y + "%";
    console.log("Animation finished");
    D = 0;
}

function MoveLeft() {
    var a = 0;
    window.setInterval(frame, Speed);
    console.log("now moving left");

    function frame() {
        if (a == 51) {
            a++;

            LevelX++;
            moved();
        }
        else if (a < 51) {
            a++;
            x--;
            Moving();
            D++;
        }
    }

}

function MoveRight() {
    var a = 0;
    window.setInterval(frame, Speed);
    console.log("now moving right");

    function frame() {
        if (a == 51) {
            LevelX--;
            a++;

            moved();
        }
        else if (a < 51) {
            a++;
            x++;
            Moving();
            D++;
        }

    }

}

function MoveDown() {
    var a = 0;

    window.setInterval(frame, Speed);
    console.log("now moving down");

    function frame() {
        if (a == 50) {

            LevelY--;
            a++;
            moved();
        }
        else if (a < 50) {
            a++;
            y++;
            Moving();
            D++;
        }
    }

}

function MoveUP() {
    var a = 0;
    window.setInterval(frame, Speed);
    console.log("now moving up");

    function frame() {
        if (a == 50) {

            a++;
            LevelY++;
            moved();
        }
        else if (a < 50) {
            a++;
            y--;
            Moving();
            D++;
        }

    }
}


function Level11() {
}


function Level21() {
    document.getElementById("ButtonBLOCKUP").setAttribute("style", "display: block;");
    if (HasCard == true) {
        document.getElementById("ButtonBLOCKUP").setAttribute("style", "display: none;");
    }
    else {
        document.getElementById("ButtonBLOCKUP").onclick = function () {
            alert("You'll need a keycard to get through here.")
        }
    }

}

function Level31() {
    //searching forest
    document.getElementById("ButtonMiddle").disabled = false;
    document.getElementById("ButtonMiddle").innerHTML = 'Search Forest?';
    document.getElementById("ButtonBLOCKUP").disabled = false;
    document.getElementById("ButtonBLOCKUP").setAttribute("style", "display: block;");
    if (HasFlashLight == true) {
        document.getElementById("ButtonMiddle").onclick = function () {
            HasKeySmall = true;
            console.log(HasKeySmall);
            alert("Recieved SmallKey");
            document.getElementById("ButtonBLOCKUP").disabled = true;
            document.getElementById("ButtonBLOCKUP").setAttribute("style", "display: none;");
        }
    }
    else {
        document.getElementById("ButtonMiddle").onclick = function () {
            alert("You'll need a FlashLight to search the forest.")
        }
    }
    //Going up
    if (HasKeySmall == true) {
        document.getElementById("ButtonBLOCKUP").setAttribute("style", "display: none;");
        document.getElementById("ButtonBLOCKUP").disabled = true;
    }
    else {
        document.getElementById("ButtonBLOCKUP").onclick = function () {
            alert("You'll need a Small key to get through here.")
        }
    }


}

function Level12() {
    document.getElementById("ButtonMiddle").disabled = false;
    document.getElementById("ButtonMiddle").innerHTML = 'Search Shed?';
    document.getElementById("ButtonMiddle").onclick = function () {
        alert("Recieved Flashlight!");
        HasFlashLight = true;
    };

}

function Level22() {
}

function Level32() {
    document.getElementById("ButtonMiddle").disabled = false;
    document.getElementById("ButtonMiddle").innerHTML = 'Search Tower?';
    document.getElementById("ButtonMiddle").onclick = function () {
        alert("Recieved keycard!");
        HasCard = true;
    };
}

function Level13() {
    document.getElementById("CHEST").setAttribute("style", "display: block;");

    document.getElementById("CHEST").onclick = function () {
        if (HasKeyBig = true) {
            alert("You picked up a gold armor.");
            Skin = "CharArmor";
            document.getElementById("Char").src = "img/"+Skin+".png";

        }
        else {
            alert("You will need a key to open this chest.");

        }
    }


}

function Level23() {
    document.getElementById("GATE").setAttribute("style", "display: block;");
    document.getElementById("GATE").onclick = function () {
        HasKeyBig = true;
        alert("Y0 went through gate");
    }
}

function Level33() {
    document.getElementById("KEY").setAttribute("style", "display: block;");
    document.getElementById("KEY").onclick = function () {
        HasKeyBig = true;
        alert("You picked up a treasure key.");
    }

}
function Bugtest(){
    HasKeySmall = true;
    HasKeyBig = true;
    HasFlashLight = true;
    HasCard = true;
    document.getElementById('UpRIGHT').innerHTML = x + y;
    Speed = 10;
}

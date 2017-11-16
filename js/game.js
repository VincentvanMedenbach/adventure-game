// javascript library for simple game development
//Variables
var HasKeySmall = false;    //Variable for key for small gate
var HasKeyBig = false;      //Variable for key for chest
var HasFlashLight = false; // Variable for Flashlight for Forest
var HasCard = false;       //Variable for entering the castle with card
var bugtest = true;       //Bugtesting mode
var y = 100;               //Horizontal background coördinates
var x = 100;               //Vertical background coördinates
var LevelX = 1;            //Horizontal Level
var LevelY = 1;            //Vertical Level
var D = 0;                 //Variable for Animation
var Skin = "char";         //Player Skin
var Speed = 10;            //WalkSpeed
var BossBattle = false;        //Disables BossBattle Stuff
var CharacterPosition = 760;
window.ondragstart = function () {
    return false;
};



//Variables refering to HTML
var ButtonUP = document.getElementById("ButtonUp");
var ButtonRight = document.getElementById('ButtonRight');
var ButtonLeft = document.getElementById('ButtonLeft');
var ButtonDown = document.getElementById('ButtonDown');
var ButtonBLOCKUP = document.getElementById('ButtonBLOCKUP');
var StartButton = document.getElementById('ButtonStart');
var Character = document.getElementById("Char");
var Draak = document.getElementById("Draak");
var ButtonMiddle = document.getElementById('ButtonMiddle');
// window.resizeTo(190, 99);


//Buttons
ButtonUP.setAttribute("onClick", "MoveUP();");
ButtonLeft.setAttribute("onClick", "MoveLeft();");
ButtonDown.setAttribute("onClick", "MoveDown();");
ButtonRight.setAttribute("onClick", "MoveRight();");
ButtonBLOCKUP.setAttribute("style", "display: none;");


//Styling for MENU
Character.setAttribute("style", "display: none");
ButtonRight.style.fontSize = '0';
ButtonUP.style.fontSize = '0';
ButtonDown.style.fontSize = '0';
ButtonLeft.style.fontSize = '0';

//Main Initializer of the game
function Start() {
    //Reset VAR
    Attacked = true;
    HasKeySmall = false;    //Variable for key for small gate
    HasKeyBig = false;      //Variable for key for chest
    HasFlashLight = false; // Variable for Flashlight for Forest
    HasCard = false;       //Variable for entering the castle with card
    y = 100;               //Horizontal background coördinates
    x = 100;               //Vertical background coördinates
    LevelX = 1;            //Horizontal Level
    LevelY = 1;            //Vertical Level
    D = 0;                 //Variable for Animation
    Skin = "char";         //Player Skin
    Speed = 10;            //WalkSpeed
    BossBattle = false;
    WalkingAllowed = false;
    WalkingBlock = true;
    XC = 200;
    YC = 430;
    CharacterPosition = 760;
    Final = false;
    if (bugtest == true) {       //Development
        Bugtest();
    }
    //Reset VAR

    //Reset IMG
    Draak.setAttribute("style", "display: none");
    Draak.src = "img/Dragon.png";
    //Reset IMG
    document.body.style.backgroundImage = "url('img/Map.png')";    //Sets correct background
    document.body.style.backgroundSize = "300%";                    //Scales game background
    var Positionsetter = x + "%" + y + "%";                         //Converts position stuff
    document.body.style.backgroundPosition = Positionsetter;        //Sets correct position
    Character.setAttribute("style", "display: block");              //Makes Character visible at start of game
    StartButton.setAttribute("style", "display: none; background-color: none; border-color: none; "); //Hides start button
    Level11();                                                      //Initiates first level
    moved();                                                        //Acts as the Character has moved to make sure everything is started
    //Turns on the correct buttons
    ButtonRight.style.fontSize = '200px';
    ButtonUP.style.fontSize = '200px';
    ButtonDown.style.fontSize = '200px';
    ButtonLeft.style.fontSize = '200px';
    ButtonStart.style.fontSize = "0";
    CrownButton.setAttribute("style", "display: none");


}

// Checks to be done Whilst moving
function Moving() {
    //Turns on exact location display
    if (bugtest == true) {
        document.getElementById('UpRIGHT').innerHTML = "X:" + x + "Y:" + y;
    }
    //Disables buttons
    ButtonRight.disabled = true;
    ButtonLeft.disabled = true;
    ButtonDown.disabled = true;
    ButtonUP.disabled = true;
    ButtonMiddle.disabled = true;
    ButtonBLOCKUP.disabled = true;
    //Removes area specific stuff
    document.getElementById("KEY").setAttribute("style", "display: none;");
    document.getElementById("CHEST").setAttribute("style", "display: none;");
    document.getElementById("GATE").setAttribute("style", "display: none;");
    ButtonBLOCKUP.setAttribute("style", "display: none;");
    //Sets correct position
    var Positionsetter = x + "%" + y + "%";
    document.body.style.backgroundPosition = Positionsetter;

    //walking animation
    if (D > 1) {
        Character.src = "img/Char/" + Skin + "2.png";

    }
    if (D == 6) {
        Character.src = "img/Char/" + Skin + "1.png";
        D = 0;
    }
    //Makes character invisible when entering castle
    if (x == 49 && y < 48 && y > 7) {
        Character.setAttribute("style", "display: none;");

    }
    //makes Character visible
    else {
        Character.setAttribute("style", "display: block;");
        //Makes Character Bigger when in castle
        if (y < 9 || BossBattle == true) {
            Character.setAttribute("style", "width: 300px;");
            Character.style.top = "300px";
        }
        //Makes character normal size
        else {
            Character.setAttribute("style", "width: 50px;");
            Character.style.top = "550px";
        }
    }

}

//Checks to do after moving
function moved() {
    //Re-Enables the character model as safety
    Character.setAttribute("style", "display: block;");
    //Used to run the correct function for levels
    var LevelXY = 'Level' + LevelX + LevelY;
    //Disables buttons when needed
    //right
    if (LevelX == 1 || LevelY == 2) {
        ButtonRight.disabled = true;
    }
    else {
        ButtonRight.disabled = false;
    }
    //left
    if (LevelX == 3 && LevelY != 1 || LevelY == 2 || LevelXY == "Level31" && HasKeySmall == true) {

        ButtonLeft.disabled = true;
    }
    else {
        ButtonLeft.disabled = false;
    }
    //Down
    if (LevelY == 1 || LevelY == 3 && LevelX != 2) {
        ButtonDown.disabled = true;
    }
    else {
        ButtonDown.disabled = false;
    }
    //UP
    if (LevelY == 3 || LevelY == 2 && LevelX != 2) {
        ButtonUP.disabled = true;
    }
    else {
        ButtonUP.disabled = false;
    }
    if (LevelX == 3 && LevelY == 1) {
        ButtonLeft.setAttribute("onClick", "MoveToForest();");
        console.log("ACTIVE!");
    }
    else {
        ButtonLeft.setAttribute("onClick", "MoveLeft();");
    }
    //Sets width of character
    if (y < 9) {
        Character.setAttribute("style", "width: 300px;");
        Character.style.top = "300px";
        // in castle
    }
    else {
        Character.setAttribute("style", "width: 50px;");
        Character.style.top = "550px";
        // outside
    }
    console.log(LevelXY);           //logs level
    eval('' + LevelXY + '()');          //Runs correct function
    document.getElementById('level_title').innerHTML = LevelXY;    //sets Topleft TXT
    Character.src = "img/Char/" + Skin + ".png";  //sets correct skin
    D = 0;                              //resets animation
}

//Function for moving left
function MoveLeft() {
    var a = 0;                               //Resets timer
    window.setInterval(movement, Speed);        //Sets correct speed to move at
    console.log("now moving left");          //Tells console which way moving

    //Movement loop
    function movement() {
        //Final movement
        if (a == 51) {
            a++;    //Adds to loop
            LevelX++; //Changes LVL
            moved();  //Sets everything back to how it should be
        }
        //moving
        else if (a < 51) {
            a++;        //Adds to loop counter
            x--;        //Moves map
            Moving();   //Executes code used everywhere whilst moving
            D++;    //Executes animation
        }
    }

}

//Function for moving Right, practicly the same as the Left
function MoveRight() {
    var a = 0;
    window.setInterval(movement, Speed);
    console.log("now moving right");

    function movement() {
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

//Function for moving Down, practicly the same as the Left
function MoveDown() {
    var a = 0;

    window.setInterval(movement, Speed);
    console.log("now moving down");

    function movement() {
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

//Function for moving UP, practicly the same as the Left
function MoveUP() {
    var a = 0;
    window.setInterval(movement, Speed);
    console.log("now moving up");

    function movement() {
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

function MoveToForest() {
    ButtonRight.disabled = true;
    ButtonUP.disabled = true;
    ButtonDown.disabled = true;
    ButtonLeft.disabled = true;
    ButtonBLOCKUP.setAttribute("style", "display: none;");
    ButtonBLOCKUP.disabled = true;
    ButtonMiddle.disabled = true;

    var a = 0;                               //Resets timer
    window.setInterval(movement, Speed);        //Sets correct speed to move at
    console.log("now moving left");          //Tells console which way moving

    //Movement loop
    function movement() {
        //Final movement
        if (a == 65) {
            console.log("did werkt");
            a++;    //Adds to loop
            CharacterPosition -= 10;
            Character.setAttribute("style", "left:" + CharacterPosition + "px;");
            Forest();
            ButtonLeft.disabled = true;
        }
        //moving
        else if (a < 65) {
            console.log("did werkt");
            CharacterPosition -= 10;
            Character.setAttribute("style", "left:" + CharacterPosition + "px;");
            a++;        //Adds to loop counter
            D++;    //Executes animation
        }
    }
}

function MoveFromForest() {
    var a = 0;                               //Resets timer
    window.setInterval(movement, Speed);        //Sets correct speed to move at
    console.log("now moving left");          //Tells console which way moving

    //Movement loop
    function movement() {
        //Final movement
        if (a == 65) {

            console.log("did werkt");
            a++;    //Adds to loop
            CharacterPosition += 10;
            Character.setAttribute("style", "left:" + CharacterPosition + "px;");
            ButtonRight.setAttribute("onClick", "MoveRight();");
            moved();
        }
        //moving
        else if (a < 65) {
            Level31();
            console.log("did werkt");
            CharacterPosition += 10;
            Character.setAttribute("style", "left:" + CharacterPosition + "px;");
            a++;        //Adds to loop counter
            D++;    //Executes animation
        }
    }
}

function Forest() {
    ButtonRight.disabled = true;
    document.getElementById('level_title').innerHTML = "FOREST";
    if (HasFlashLight == true) {
        HasKeySmall = true;
        console.log(HasKeySmall);
        alert("Recieved SmallKey");
        MoveFromForest();
    }
    else {
        StartButton.innerHTML = "You Died!";
        StartButton.setAttribute("style", "display: block; top: 20%;");
        Character.src = "img/Char/charDead.png";
    }

}

function Level11() {
}

function Level21() {
    //Middle level
    //Checks for keycard
    if (HasCard == true) {
        //If you have the keycard, Remove the block
        ButtonBLOCKUP.setAttribute("style", "display: none;");
        ButtonBLOCKUP.disabled = true;
    }
    else {
        ButtonBLOCKUP.disabled = false;
        ButtonBLOCKUP.setAttribute("style", "display: block;"); //Disables going up
        ButtonBLOCKUP.onclick = function () {
            //If not, alert the player in a popup when the block is clicked
            alert("You'll need a keycard to get through here.");

        }
    }

}

function Level31() {
    //searching forest

    // Going
    // up
    if (HasKeySmall == true) {
        ButtonBLOCKUP.setAttribute("style", "display: none;");
        ButtonBLOCKUP.disabled = true;
    }
    else {
        ButtonBLOCKUP.disabled = false;
        ButtonBLOCKUP.setAttribute("style", "display: block;");
        ButtonBLOCKUP.onclick = function () {
            alert("You'll need a Small key to get through here.")
        }
    }


}

function Level12() {
    if (HasFlashLight == false) {
        ButtonMiddle.disabled = false;
        ButtonMiddle.innerHTML = 'Search Shed?';
    }

    ButtonMiddle.onclick = function () {
        alert("Recieved Flashlight!");
        ButtonMiddle.disabled = true;
        HasFlashLight = true;
    };

}

function Level22() {
}

function Level32() {
    if (HasCard == false) {
        ButtonMiddle.disabled = false;
        ButtonMiddle.innerHTML = 'Search Tower?';
    }
    ButtonMiddle.onclick = function () {
        alert("Recieved keycard!");
        HasCard = true;
        ButtonMiddle.disabled = true;
    };
}

function Level13() {
    if (Skin == "charArmor") {
        document.getElementById("CHEST").setAttribute("style", "display: none;");
    }
    else {
        document.getElementById("CHEST").setAttribute("style", "display: block;");
    }

    document.getElementById("CHEST").onclick = function () {
        if (HasKeyBig == true) {
            alert("You picked up armor.");
            Skin = "charArmor";
            Character.src = "img/Char/" + Skin + ".png";
            document.body.style.backgroundImage = "url('img/MapOpenChest.png')";
            document.getElementById("CHEST").setAttribute("style", "display: none;");
        }
        else {
            alert("You will need a key to open this chest.");

        }
    }


}

function Level23() {
    document.getElementById("GATE").setAttribute("style", "display: block;");
    document.getElementById("GATE").onclick = function () {
        BossBattle = true;
        StartBossBattle();
    }
}

function Level33() {
    if (HasKeyBig == false) {
        document.getElementById("KEY").setAttribute("style", "display: block;");
    }
    else {
        document.getElementById("KEY").setAttribute("style", "display: none;");
    }
    document.getElementById("KEY").onclick = function () {
        HasKeyBig = true;
        document.getElementById("KEY").setAttribute("style", "display: none;");
        alert("You picked up a treasure key.");
        document.body.style.backgroundImage = "url('img/MapNoKey.png')";
    }

}

function Bugtest() {
    HasKeySmall = true;
    HasKeyBig = true;
    HasFlashLight = true;
    HasCard = true;
    document.getElementById('UpRIGHT').innerHTML = x + y;
    Speed = 10;
}

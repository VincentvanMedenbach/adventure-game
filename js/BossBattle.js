var Keysleft = false;
var Keysup = false;
var Keysright = false;
var Keysdown = false;
var AttackKey = false;
var Attacked = false;
var movement = 5;
var WalkingAllowed = true;
var WalkingBlock = true;
var XC = 200;
var YC = 430;
var PositionChar = "left:" + XC + "px;top:" + YC + "px;" + "width: 300px;";

function StartBossBattle() {
    console.log("You have encountered a dragon");
    document.body.style.backgroundImage = "url('img/BossBattleBG.png')";    //Sets correct background
    document.body.style.backgroundSize = "100%";                        //Sets correct background scale

    //Removing Buttons
    ButtonRight.style.fontSize = '0';
    ButtonUP.style.fontSize = '0';
    ButtonDown.style.fontSize = '0';
    ButtonLeft.style.fontSize = '0';

    //Setting Character's properly
    Draak.setAttribute("style", "display: block");
    Character.setAttribute("style", PositionChar);

    //UpRight checker
    document.getElementById('UpRIGHT').innerHTML = "X" + XC + "y" + YC;

    window.onkeydown = function (KEY) {
        var KEYCODE = KEY.keyCode;
        KEY.preventDefault();
        if (KEYCODE === 37) {
            Keysleft = true;
        }
        else if (KEYCODE === 38) {
            Keysup = true;
        }
        else if (KEYCODE === 39) {
            Keysright = true;
        }
        else if (KEYCODE === 40) {
            Keysdown = true;
        }
        else if (KEYCODE === 32 && XC > 550) {
            DraakATTACK();
        }
        walking();
    };   //Keypress listener


    window.onkeyup = function (KEY) {
        var KEYCODE = KEY.keyCode;
        KEY.preventDefault();
        if (KEYCODE === 37) Keysleft = false;
        else if (KEYCODE === 38) Keysup = false;
        else if (KEYCODE === 39) Keysright = false;
        else if (KEYCODE === 40) Keysdown = false;
    };    //Keypress listener deactivator

    function walking() {
        SpeedChar = 20;
        window.setInterval(keyz(), SpeedChar);

        function keyz() {
            console.log("walking");
            if (Keysup && WalkingAllowed == true) {
                console.log("KEYUPPRESSED");
                YC -= movement;
                D++;
            }
            if (Keysdown && WalkingAllowed == true) {
                YC += movement;
                console.log("KEYDOWNPRESSED");
                D++;
            }

            if (Keysleft && WalkingAllowed == true) {
                XC -= movement;
                console.log("KEYLEFTPRESSED");
                D++;
            }
            if (Keysright && WalkingAllowed == true) {
                XC += movement;
                D++;
                console.log("KEYRightPRESSED");
            }
            MovingCHAR();
        }

    }            //Making the character move when key is pressed


    function MovingCHAR() {
        while (YC > 450) {
            YC--;
        }
        while (YC < 215) {
            YC++;
        }
        while (XC < -20) {
            XC++;
        }
        while (XC > 580 && WalkingBlock == true) {
            XC--;
        }
        if (D > 7 && WalkingAllowed == true) {
            Character.src = "img/Char/" + Skin + "2.png";

        }
        if (D > 15 && WalkingAllowed == true) {
            Character.src = "img/Char/" + Skin + "1.png";
            D = 0;
        }
        var PositionChar = "left:" + XC + "px;top:" + YC + "px;" + "width: 300px;";
        Character.setAttribute("style", PositionChar);
        document.getElementById('UpRIGHT').innerHTML = "X" + XC + "y" + YC;
    }         //Stuff to do whilst moving

    function DraakATTACK() {
        console.log(Skin);
        if (Skin == "CharArmor" && Attacked == false) {
            WalkingAllowed = false;
            Attacked = true;
            SwordAttack();
            Character.src = "img/Sword/Animation1.png";
            console.log("You won.");


        }
        else {
            WalkingAllowed = false;
            Character.src = "img/Char" + Skin + "Dead.png";
            Draak.src = "img/Dragon1.png";
            StartButton.innerHTML = "You lost.";
            StartButton.setAttribute("style", "display: block; top: 20%;");
        }
    }

}

function SwordAttack(){
    var a = 0;
    window.setInterval(Attacking, 20);
    console.log("Now attacking Dragon!");

    function Attacking() {
        if (a == 51){
            Draak.src = "";
            Draak.alt = "";
            WalkingAllowed = true;
            WalkingBlock = false;
        }
        else if (a == 50) {
            a++;
            Character.src = "img/Sword/Animation3.png";
        }
        else if (a < 20) {
            a++;
            Character.src = "img/Sword/Animation1.png";
        }
        else if (a > 19 && a < 50){
            a++;
            Character.src = "img/Sword/Animation2.png";
        }

    }
}
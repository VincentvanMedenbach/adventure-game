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
var Direction = "left";
var FinalVAR = false;
var CrownButton = document.getElementById("Crown");
var Crown = false;

function StartBossBattle() {
    WalkingAllowed = true;
    Attacked = false;
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
        if (KEYCODE === 37 && WalkingAllowed == true) {
            Keysleft = true;
            walking();
        }
        else if (KEYCODE === 38 && WalkingAllowed == true) {
            Keysup = true;
            walking();
        }
        else if (KEYCODE === 39 && WalkingAllowed == true) {
            Keysright = true;
            walking();
        }
        else if (KEYCODE === 40 && WalkingAllowed == true) {
            Keysdown = true;
            walking();
        }
        else if (KEYCODE === 32 && XC > 550 && WalkingAllowed == true && Attacked == false) {
            Attacked == true;
            DraakATTACK();
            walking();
        }

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
                Direction = "right";
                D++;
            }
            if (Keysright && WalkingAllowed == true) {
                XC += movement;
                D++;
                Direction = "left";
                console.log("KEYRightPRESSED");
            }
            MovingCHAR();
        }

    }            //Making the character move when key is pressed


    function MovingCHAR() {
        while (YC > 430 && WalkingAllowed == true) {
            YC--;
        }
        while (YC < 215 && WalkingAllowed == true) {
            YC++;
        }
        while (XC < -20 && WalkingAllowed == true) {
            XC++;
        }
        while (XC > 580 && WalkingBlock == true) {
            XC--;
        }
        if (D == 1 && WalkingAllowed == true) {
            Character.src = "img/Char/" + Skin + Direction + "2.png";
            console.log('2 werkt');
        }
        else if (D > 5 && WalkingAllowed == true && D < 10) {
            Character.src = "img/Char/" + Skin + Direction + "1.png";
            console.log('1 werkt');
        }
        else if (D > 10 && WalkingAllowed == true) {
            D = 0;
        }
        if (XC > 1230 && WalkingAllowed == true && FinalVAR == false) {
            FinalFunct();
        }
        var PositionChar = "left:" + XC + "px;top:" + YC + "px;" + "width: 300px;";
        Character.setAttribute("style", PositionChar);
        document.getElementById('UpRIGHT').innerHTML = "X" + XC + "y" + YC;
    }         //Stuff to do whilst moving

    function DraakATTACK() {
        console.log(Skin);
        if (Skin == "charArmor" && Attacked == false) {
            WalkingAllowed = false;
            Attacked = true;
            SwordAttack();
            Character.src = "img/Sword/Animation1.png";
            console.log("You won.");

        }
        else {
            WalkingAllowed = false;
            Character.src = "img/Char/CharDead.png";
            Draak.src = "img/Dragon1.png";
            StartButton.innerHTML = "You lost.";
            StartButton.setAttribute("style", "display: block; top: 20%;");
        }
    }


    function FinalFunct() {
        XC = 200;
        YC = 430;
        FinalVAR == true;
        document.body.style.backgroundImage = "url('img/Final.png')";
        StartButton.innerHTML = "You Won!";
        StartButton.setAttribute("style", "display: block; top: 20%;");
        CrownButton.setAttribute("style", "display: block");

    }

    function CrownFunct() {
        Crown = true;
        document.body.style.backgroundImage = "url('img/FinalNoCrown.png')";
    }

    function SwordAttack() {
        var a = 0;
        window.setInterval(Attacking, 20);
        console.log("Now attacking Dragon!");

        function Attacking() {
            if (a == 51) {
                Draak.setAttribute("style", "display: none;");
                WalkingAllowed = true;
                WalkingBlock = false;
                a = 52;
            }
            else if (a == 50) {
                a++;
                Character.src = "img/Sword/Animation3.png";
            }
            else if (a < 20) {
                a++;
                Character.src = "img/Sword/Animation1.png";
            }
            else if (a > 19 && a < 50) {
                a++;
                Character.src = "img/Sword/Animation2.png";
            }

        }
    }
document.getElementById("openEyes").addEventListener("click", showEyes);
document.getElementById("shapeShift").addEventListener("click", shapeShifter);
document.getElementById("toggleBtn").addEventListener("input", auroraON);
document.getElementById("film").addEventListener("click", developFilm);
document.getElementById("toggleBtn2").addEventListener("input", fae);
document.getElementById("immediateEnv").addEventListener('change', immediateEnv);
document.getElementById("impliedEnv").addEventListener('change', impliedEnv);
document.getElementById("mentalEnv").addEventListener('change', mentalEnv);
document.getElementById("overTime").addEventListener('input', overTime);
document.getElementById("flashImg").addEventListener('click', flashImgs);

let toggleNum = 0;

let eyesImg = document.createElement("img");
eyesImg.src = "./assets/eyes.gif";
$(eyesImg).addClass("openEyesGif");

let shapeShifting = document.createElement("div");
$(shapeShifting).addClass("shifting")

function showEyes() {
    //adding open eye gif
    if ($(document.getElementById("eyes")).hasClass("bothEyes")) {
        $(document.getElementById("eyes")).removeClass("bothEyes");
    }
    else {
        $(document.getElementById("shiftShapes")).removeClass("shifting");
        $(document.getElementById("eyes")).addClass("bothEyes");
    }
}

function shapeShifter() {
    if ($(document.getElementById("shiftShapes")).hasClass("shifting")) {
        $(document.getElementById("shiftShapes")).removeClass("shifting");
    }
    else {
        $(document.getElementById("eyes")).removeClass("bothEyes");
        $(document.getElementById("shiftShapes")).addClass("shifting");
    }
}


function auroraON() {
    toggleNum += 1;
    if (toggleNum % 2 == 1) {
        document.getElementById("watermark").src = "./assets/auroraON.gif";
        document.getElementById("hookToTitle").style.zIndex = 1;
    }
    else {
        document.getElementById("watermark").src = "./assets/mountains.png";
    }
}

function developFilm(){
    console.log("hey")
    document.getElementById("title").style.visibility = "visible";
    $('#title').textillate({ in: { effect: 'rollIn' } });
    document.getElementById("peopleFilm").style.visibility = "visible";
}

function fae() {
    toggleNum += 1;
    if (toggleNum % 2 == 1) {
        // changing toggle text
        document.getElementById("ourselves").style.textShadow = "2px 2px 8px #000000";
        document.getElementById("ourselves").style.color = "white"
        document.getElementById("others").style.textShadow = "none";
        document.getElementById("others").style.color = "#1B2C2E"

        //changing description text
        document.getElementById("othersTxt").style.backgroundColor = "rgba(0,0,0,0.15)";
        document.getElementById("ourselvesTxt").style.color = "#1B2C2E";
        document.getElementById("ourselvesTxt").style.backgroundColor = "white";

        // changing the image
        document.getElementById("othersImg").style.filter = "grayscale(1)";
        document.getElementById("ourselvesImg").style.filter = "grayscale(0)";




    }
    else {
        // changing text
        document.getElementById("others").style.textShadow = "2px 2px 8px #000000";
        document.getElementById("others").style.color = "white";
        document.getElementById("ourselves").style.textShadow = "none";
        document.getElementById("ourselves").style.color = "#1B2C2E"

        //changing description text
        document.getElementById("ourselvesTxt").style.backgroundColor = "rgba(0,0,0,0.15)";
        document.getElementById("othersTxt").style.color = "#1B2C2E";
        document.getElementById("othersTxt").style.backgroundColor = "white";


        document.getElementById("othersImg").style.filter = "grayscale(0)";
        document.getElementById("ourselvesImg").style.filter = "grayscale(1)";
    }
}


let immediateChoice = "outside";
let impliedChoice = "good";
let mentalChoice = "happy"


function immediateEnv(){
    if(document.getElementById("immediateEnv").value == "home")
    {
        document.getElementById("immediateImg").src = "./assets/home.png";
        immediateChoice = "at home";
    }
    else if(document.getElementById("immediateEnv").value == "work") {
        document.getElementById("immediateImg").src = "./assets/office.png";
        immediateChoice = "at work";
    }
    else {
        document.getElementById("immediateImg").src = "./assets/outside.png";
        immediateChoice = "outside";
    }
    situationSentence();
}

function impliedEnv(){
    if(document.getElementById("impliedEnv").value == "gloomy"){
        document.getElementById("immediateImg").style.filter = "grayscale(1)";
        impliedChoice = "gloomy";
    }
    else if(document.getElementById("impliedEnv").value == "lovely") {
        document.getElementById("immediateImg").style.filter = "brightness(1.1)";
        impliedChoice = "lovely";
    }
    else {
        document.getElementById("immediateImg").style.filter = "grayscale(0)";
        document.getElementById("immediateImg").style.filter = "brightness(100%)";
        impliedChoice = "good";
    }
    situationSentence();
}

function mentalEnv() {
    if(document.getElementById("mentalEnv").value == "happy"){
        document.getElementById("situationBuilders").src = "./assets/happy.png";
        mentalChoice = "happy";
    }
    else if(document.getElementById("mentalEnv").value == "angry") {
        document.getElementById("situationBuilders").src = "./assets/mad.png";
        mentalChoice = "angry";
    }
    else {
        document.getElementById("situationBuilders").src = "./assets/sad.png";
        mentalChoice = "sad";
    }
    situationSentence();
}

function situationSentence(){
    document.getElementById("situationSentenceP1").innerHTML = "Being " + immediateChoice + " today was " + impliedChoice + ".<br>"
    
    if ((impliedChoice == "gloomy" && mentalChoice == "happy")) {
        document.getElementById("situationSentenceP2").innerHTML = "Despite it all, I still feel happy!"
    }
    else if ((impliedChoice == "good" || impliedChoice == "lovely" ) && (mentalChoice == "sad" || mentalChoice == "angry")){
        document.getElementById("situationSentenceP2").innerHTML = "I still feel " + mentalChoice + " though."; 
    }
    else if (impliedChoice == "gloomy" && (mentalChoice == "sad" || mentalChoice == "angry")){
        document.getElementById("situationSentenceP2").innerHTML = "I'm " + mentalChoice + " enough as it is."; 
    }
    else {
        document.getElementById("situationSentenceP2").innerHTML = "I feel so " + mentalChoice + "!";
    }
}

function overTime() {
    console.log(document.getElementById("overTime").value)
    if (document.getElementById("overTime").value == 1) {
        document.getElementById("afImg").src = "./assets/breakup1.png";
        document.getElementById("afText").innerText = "Well, my partner and I are breaking up.";
    }
    else if (document.getElementById("overTime").value == 2) {
        document.getElementById("afImg").src = "./assets/breakup2.png";
        document.getElementById("afText").innerText = "I don't know if I'll ever find someone else";
    }
    else if (document.getElementById("overTime").value == 3) {
        document.getElementById("afImg").src = "./assets/breakup3.png";
        document.getElementById("afText").innerText = "Hanging out with friends feels good though.";
    }
    else {
        document.getElementById("afImg").src = "./assets/sun1.png";
        document.getElementById("afText").innerText = "You know what, I think I will be all right.";
    }
}

function flashImgs() {
    document.getElementById("flashImg").style.visibility = "hidden";
    document.getElementById("stage").src = "./assets/flashing.gif";

}






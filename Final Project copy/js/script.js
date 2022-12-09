document.getElementById("openEyes").addEventListener("click", showEyes);
document.getElementById("shapeShift").addEventListener("click", shapeShifter);
document.getElementById("toggleBtn").addEventListener("input", auroraON);

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




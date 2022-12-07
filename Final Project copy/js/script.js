document.getElementById("openEyes").addEventListener("click", showEyes);
document.getElementById("toggleBtn").addEventListener("input", auroraON);

let toggleNum = 0;

function showEyes() {
    //adding open eye gif
    let eyesImg = document.createElement("img");
    eyesImg.src = "./assets/eyes.gif";
    $(eyesImg).addClass("openEyesGif")
    document.getElementById("opener2").appendChild(eyesImg);
    document.getElementById("openEyes").removeEventListener("click", showEyes);
}


function auroraON() {
    toggleNum += 1;
    if (toggleNum%2 == 1) {
        document.getElementById("watermark").src = "./assets/auroraON.gif";
        document.getElementById("hookToTitle").style.zIndex = 9;
    }
    else {
        document.getElementById("watermark").src = "./assets/mountains.png";
    }

}



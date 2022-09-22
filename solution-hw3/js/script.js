class Glaze {
    glazeType;
    glazePrice;

    constructor(glazeType, glazePrice) {
        this.glazeType = glazeType;
        this.glazePrice = glazePrice;
    }
}

const keepOriginal = new Glaze("Keep original", 0);
const sugarMilk = new Glaze("Sugar milk", 0);
const vanillaMilk = new Glaze("Vanilla milk", 0.50);
const doubleChocolate = new Glaze("Double chocolate", 1.50);

class Packs {
    packSize;
    packPrice;

    constructor(packSize, packPrice) {
        this.packSize = packSize;
        this.packPrice = packPrice;
    }
}

const onePack = new Packs(1, 1);
const threePack = new Packs(3, 3);
const sixPack = new Packs(6, 5);
const twelvePack = new Packs(12, 10);

let allGlazes = [keepOriginal, sugarMilk, vanillaMilk, doubleChocolate];
let allPacks = [onePack, threePack, sixPack, twelvePack];

// loops
let glazeOptions = document.getElementById("glazeDropdown");
for (i = 0; i < allGlazes.length; i++) {
    let glazeOptionItem = document.createElement("option");
    glazeOptionItem.textContent = allGlazes[i].glazeType;
    glazeOptions.appendChild(glazeOptionItem);
}

let packOptions = document.getElementById("packDropdown");
for (i = 0; i < allPacks.length; i++) {
    let packOptionItem = document.createElement("option");
    packOptionItem.textContent = allPacks[i].packSize;
    packOptions.appendChild(packOptionItem);
}

//console.log(allGlazes[i])

let basePrice = 2.49;
let glazeChoice = 0;
let packChoice = 1;
let finalPrice;

function glazingChange(element) {
    // get value of selected glazing option
    const priceChange = element.value;

    for (i = 0; i < allGlazes.length; i++) {
        if (allGlazes[i].glazeType == element.value) {
            glazeChoice = allGlazes[i].glazePrice;
        }
    }

    for (i = 0; i < allPacks.length; i++) {
        if (allPacks[i].packSize == element.value) {
            packChoice = allPacks[i].packPrice;
        }
    }

    finalPrice = ((basePrice + glazeChoice) * packChoice).toFixed(2);
    document.getElementById("dynamicPrice").innerHTML = "$ " + finalPrice;



    // add your code to do update the price ...
}
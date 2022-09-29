// class constructor for glaze objects
class Glaze {
    // two class properties, the type of glaze (glazeType) and the price adaptation (glazePrice)
    glazeType;
    glazePrice;

    constructor(glazeType, glazePrice) {
        this.glazeType = glazeType;
        this.glazePrice = glazePrice;
    }
}

// creating the objects using the Glaze class
const keepOriginal = new Glaze("Keep original", 0);
const sugarMilk = new Glaze("Sugar milk", 0);
const vanillaMilk = new Glaze("Vanilla milk", 0.50);
const doubleChocolate = new Glaze("Double chocolate", 1.50);

// class constructor for Pack objects
class Packs {
    // two class properties, the size of the pack (packSize), and the price adaptation (packPrice)
    packSize;
    packPrice;

    constructor(packSize, packPrice) {
        this.packSize = packSize;
        this.packPrice = packPrice;
    }
}

// creating the objects using the Packs class
const onePack = new Packs(1, 1);
const threePack = new Packs(3, 3);
const sixPack = new Packs(6, 5);
const twelvePack = new Packs(12, 10);

// creating arrays that store objects of Glaze and Packs, respectively
let allGlazes = [keepOriginal, sugarMilk, vanillaMilk, doubleChocolate];
let allPacks = [onePack, threePack, sixPack, twelvePack];

// a loop to dynamicall populate the glaze dropdown menu
let glazeOptions = document.getElementById("glazeDropdown");
for (i = 0; i < allGlazes.length; i++) {
    let glazeOptionItem = document.createElement("option");
    glazeOptionItem.textContent = allGlazes[i].glazeType;
    glazeOptions.appendChild(glazeOptionItem);
}

// a loop to dynamicall populate the pack dropdown menu
let packOptions = document.getElementById("packDropdown");
for (i = 0; i < allPacks.length; i++) {
    let packOptionItem = document.createElement("option");
    packOptionItem.textContent = allPacks[i].packSize;
    packOptions.appendChild(packOptionItem);
}

// initialize variables for the base price, glaze price adaptation, pack price adaptation, final price, glazeChoice, and packChoice
let glazeAdaptation = 0;
let packAdaptation = 1;
let basePrice;
let finalPrice;
let glazeChoice;
let packChoice;
// calculates the final price 
function glazingChange(element) {

    // this stores the value from the dropdown selection
    const priceChange = element.value;

    // if the value is from the glaze dropdown menu, run through the array that stored all Glaze objects
    for (i = 0; i < allGlazes.length; i++) {
        // finds the glaze object that matches the one the user selected
        if (allGlazes[i].glazeType == element.value) {
            // set glazeAdaptation to the selected glaze object's price adaptation
            glazeAdaptation = allGlazes[i].glazePrice;
            glazeChoice = allGlazes[i].glazeType
        }
    }

    // if the value is from the pack dropdown menu, run through the array that stored all Packs objects
    for (i = 0; i < allPacks.length; i++) {
        // finds the pack object that matches the one the user selected
        if (allPacks[i].packSize == element.value) {
            // set packAdaptation to the selected pack object's price adaptation
            packAdaptation = allPacks[i].packPrice;
            packChoice = allPacks[i].packSize;
        }
    }

    // set the finalPrice after performing the math
    finalPrice = ((basePrice + glazeAdaptation) * packAdaptation).toFixed(2);


    // dynamically replace the element in html with the finalPrice
    document.getElementById("dynamicPrice").textContent = "$ " + finalPrice;
}


// The start of new code for hw 4
cart = [];

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');


for (roll in rolls) {
    if (rollType == roll) {
        document.querySelector("h1").textContent = roll + " Cinnamon Roll";
        document.querySelector("#dynamicPic").src = "./assets/products/" + rolls[roll].imageFile;
        document.querySelector("#dynamicPrice").textContent = "$ " + rolls[roll].basePrice;
        basePrice = rolls[roll].basePrice;
    }
}

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

function storeInfo() {
    let userSelection = new Roll(rollType, glazeChoice, packChoice, basePrice)
    cart.push(userSelection);
    console.log(cart);
}



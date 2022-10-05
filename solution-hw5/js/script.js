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

// initialize variables for the base price, glaze price adaptation, pack price adaptation, final price, glazeChoice, and packChoice
let glazeAdaptation = 0;
let packAdaptation = 1;
let basePrice;
let finalPrice;
let glazeChoice = "Keep original";
let packChoice = 1;
// calculates the final price 

if (document.URL.includes("product_details.html")) {
    // a loop to dynamically populate the glaze dropdown menu
    let glazeOptions = document.getElementById("glazeDropdown");
    for (i = 0; i < allGlazes.length; i++) {
        let glazeOptionItem = document.createElement("option");
        glazeOptionItem.textContent = allGlazes[i].glazeType;
        glazeOptions.appendChild(glazeOptionItem);
    }

    // a loop to dynamically populate the pack dropdown menu
    let packOptions = document.getElementById("packDropdown");
    for (i = 0; i < allPacks.length; i++) {
        let packOptionItem = document.createElement("option");
        packOptionItem.textContent = allPacks[i].packSize;
        packOptions.appendChild(packOptionItem);
    }

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
}



const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');

// iterate through rolls dictionary
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
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

// when user clicks "add to cart"
function storeInfo() {
    let userSelection = new Roll(rollType, glazeChoice, packChoice, basePrice)
    cart.push(userSelection);
    console.log(cart);
}

cart = []

let cartObject1 = new Roll("Original", "Sugar Milk", 1, 2.49)
let cartObject2 = new Roll("Walnut", "Vanilla Milk", 12, 3.49)
let cartObject3 = new Roll("Raisin", "Sugar Milk", 3, 2.99)
let cartObject4 = new Roll("Apple", "Original", 3, 3.49)



if (document.URL.includes("cart.html")) {

    cart = [cartObject1, cartObject2, cartObject3, cartObject4]

    for (item in cart) {
        console.log(cart[item])
        createElement(cart[item])
    }

    function createElement(cartItem) {
        console.log(cartItem.type)

        // make a clone of the notecard template
        console.log("step 1")
        const template = document.querySelector('#cartItem-template');
        const clone = template.content.cloneNode(true);

        console.log("step 2")
        // connect this clone to our notecard.element
        // from this point we only need to refer to notecard.element
        cartItem.element = clone.querySelector('.cartItem');
        console.log(cartItem.element)

        console.log("step 3")
        // add the notecard clone to the DOM
        // find the notecard parent (#notecard-list) and add our notecard as its child
        const cartListElement = document.querySelector('#cartItemList');
        cartListElement.prepend(cartItem.element);

        // // populate the notecard clone with the actual notecard content
        // updateElement(cartItem);
    }

    // function updateElement(cartItem) {
    //     // get the HTML elements that need updating
    //     const cartImageElement = cartItem.element.querySelector('#image-template');
    //     //const noteTitleElement = notecard.element.querySelector('.note-title');
    //     //const noteBodyElement = notecard.element.querySelector('.note-body');

    //     // copy our notecard content over to the corresponding HTML elements
    //     cartImageElement.src = "./assets/products/" + rolls[cartItem].imageFile;
    //     //noteTitleElement.innerText = notecard.noteTitle;
    //     //noteBodyElement.innerText = notecard.noteBody;
    // }




}




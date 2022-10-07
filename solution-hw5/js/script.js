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
const keepOriginal = new Glaze("Keep Original", 0);
const sugarMilk = new Glaze("Sugar Milk", 0);
const vanillaMilk = new Glaze("Vanilla Milk", 0.50);
const doubleChocolate = new Glaze("Double Chocolate", 1.50);

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

// this if statement is done since im sharing the javascript file across multiple HTML files, this idea was found on Slack
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

// this class holds the roll properties
class Roll {
    glazeAdaptation; //this will hold the price adaptation based on glaze

    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;

        // this if statement is done because "Original" is different than "Keep Original"

        if (this.glazing == "Original") {
            this.glazeAdaptation = keepOriginal.glazePrice;
        }
        else { // for everything else, it just finds the price adaptation as normal
            this.glazeAdaptation = (allGlazes.find(item => item.glazeType == this.glazing)).glazePrice
        }

        // calculates and stores the price based off of the base price, glaze adaptation, and pack adaptation
        this.calculatedPrice = (basePrice + this.glazeAdaptation) * allPacks.find(item => item.packSize === this.size).packPrice;
    }

}

// when user clicks "add to cart" (part of hw 4)
function storeInfo() {
    let userSelection = new Roll(rollType, glazeChoice, packChoice, basePrice)
    cart.push(userSelection);
}


// this if statement is done since im sharing the javascript file across multiple HTML files, this idea was found on Slack
if (document.URL.includes("cart.html")) {
    // create empty cart array
    let Cart = []

    // creates cartObjects 
    let cartObject1 = new Roll("Original", "Sugar Milk", 1, 2.49)
    let cartObject2 = new Roll("Walnut", "Vanilla Milk", 12, 3.49)
    let cartObject3 = new Roll("Raisin", "Sugar Milk", 3, 2.99)
    let cartObject4 = new Roll("Apple", "Original", 3, 3.49)
    
    // create a set for the final cart
    let finalCart = new Set();

    // push objects to original set
    cart = [cartObject1, cartObject2, cartObject3, cartObject4];
    let totalPrice = 0;

    // this function calculates the final price by iterating through the cart item prices and adds them together
    function totalPriceCalc() {
        totalPrice = 0;

        //iterates through cart
        for (items of finalCart) {
            // does the math
            totalPrice += items.calculatedPrice;
        }
        // rewrites the total price
        document.querySelector("#cartTotal").innerHTML = "$ " + totalPrice.toFixed(2);
    }

    // this function deletes the template element and the cart item from the set. Then, it recalculates the final price and prints it
    function deleteItem(element, cartItem) {
        element.remove();
        finalCart.delete(cartItem);
        totalPriceCalc()
    }

    // this function creates the template elements
    function createElement(cartItem) {
        //pushes cart items into my set
        finalCart.add(cartItem);

        // creates template, clone, and cart element
        const template = document.querySelector('#cartItem-template');
        let clone = template.content.cloneNode(true);
        let cartElement = clone.querySelector(".cartItem")

        // deletes the cart element when "remove" is clicked (does so by calling the deleteItem function)
        const btnDelete = cartElement.querySelector(".remove");
        btnDelete.addEventListener('click', () => {
            deleteItem(cartElement, cartItem);
        });

        // parent list that holds all template elements
        let cartListElement = document.querySelector('#cartItemList');

        // variables to be written in for each element
        let elementImage = "./assets/products/" + rolls[cartItem.type].imageFile;
        let elementName = cartItem.type;
        let elementGlaze = cartItem.glazing;
        let elementQuant = cartItem.size;


        // this section populates the template with each item's specifications (image, type, glaze, pack, & price)
        cartElement.querySelector("#image-template").src = elementImage;
        cartElement.querySelector("#text-template").innerHTML = elementName + " Cinnamon Roll<br>" + "Glazing: "
            + elementGlaze + "<br>Pack Size: " + elementQuant;
        cartElement.querySelector("#itemPrices").innerHTML = "$ " + cartItem.calculatedPrice.toFixed(2);

        // appends elements to the list element
        cartListElement.append(cartElement);
    }

    // this loop does all the magic, it is what creates elements
    for (item in cart) {
        createElement(cart[item])
    }

    // finally, calculate the final price (this is mostly used on page load and gets modifed after removing elements)
    totalPriceCalc()
}




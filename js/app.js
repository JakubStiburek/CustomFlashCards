import {Card} from "./Card.js"
import {exampleCards} from "./exampleCards.js";

//
// Color picking
//

// Set of available color combinations
const colorCombinations = [
    ["#A17436", "#3DB841"],
    ["#DAEDC9", "#DB94D2"],
    ["#3A3399", "#D5B981"],
    ["#AEB43C", "#DAE6B3"]
]

//  Get elements representing color combinations for User
const pair1 = document.querySelector("#variant-1-a");
const pair2 = document.querySelector("#variant-2-a");
const pair3 = document.querySelector("#variant-3-a");
const pairInitial = document.querySelector("#initial-variant-a");

// Array to be filled according to user choice
// Initially filled with original color combination
let colors = ["#AEB43C", "#DAE6B3"];

// Set front color, to be used after user picks color combination
const setFrontColor = () => {
    cardObjects.forEach(cardObject => {
        cardObject.changeColors(colors);
        cardObject.setColorFront();
    })
}

// Resets cards which are currently turned to front, to be used after user picks color combination
const resetToFront = () => {
    cardObjects.forEach(cardObject => {
        cardObject.setFront();
    })
}

// User picks a color combination
const colorPicker = () => {
    // Listen to user choosing the color combination
    pair1.addEventListener("click", () => {
        resetToFront();
        colors = colorCombinations[0];
        setFrontColor();
    })
    pair2.addEventListener("click", () => {
        resetToFront();
        colors = colorCombinations[1];
        setFrontColor();
    })
    pair3.addEventListener("click", () => {
        resetToFront();
        colors = colorCombinations[2];
        setFrontColor();
    })
    pairInitial.addEventListener("click", () => {
        resetToFront();
        colors = colorCombinations[3];
        setFrontColor();
    })
    return colors;
}

//
// Make 9 example flashcards.
//

// Generate n number of card elements
// Card consists of div and p elements
const n = 8;
for(let i=0; i < n; i++){
    document.querySelector("#example-fc-wrapper").insertAdjacentHTML("afterbegin", "<div class='card'><p class='cardText front'></p></div>");
}

// Get all p elements in example-fc-wrapper div
const cards = document.querySelectorAll("#example-fc-wrapper .cardText");

// Make an array to be filled with instances of class Card
let cardObjects = [];

// Fill cardObjects array with class Card instances
for(let i=0; i < n; i++){
    cardObjects[i] = new Card(exampleCards[i], cards[i], colors);
}

// Immediate setting after user picks color combination
colorPicker();

// Add event listener on click event for card within each class Card instance
// Then add event listener on contextmenu event for card within each class Card instance
cardObjects.forEach(cardObject => {
    cardObject.card.addEventListener("click", () => {
        const colors = colorPicker();
        cardObject.changeColors(colors);
        cardObject.leftClick();
    })
    cardObject.card.addEventListener("contextmenu", event => {
        event.preventDefault();
        cardObject.rightClick();
    })
})
//
// Color picking for custom cards
//

const setFrontColorCustom = () => {
    customCardObjects.forEach(customCardObject => {
        customCardObject.changeColors(colors);
        customCardObject.setColorFront();
    })
}

// Resets cards which are currently turned to front, to be used after user picks color combination
const resetToFrontCustom = () => {
    customCardObjects.forEach(customCardObject => {
        customCardObject.setFront();
    })
}

// User picks a color combination
const colorPickerCustom = () => {
    // Listen to user choosing the color combination
    pair1.addEventListener("click", () => {
        resetToFrontCustom();
        colors = colorCombinations[0];
        setFrontColorCustom();
    })
    pair2.addEventListener("click", () => {
        resetToFrontCustom();
        colors = colorCombinations[1];
        setFrontColorCustom();
    })
    pair3.addEventListener("click", () => {
        resetToFrontCustom();
        colors = colorCombinations[2];
        setFrontColorCustom();
    })
    pairInitial.addEventListener("click", () => {
        resetToFrontCustom();
        colors = colorCombinations[3];
        setFrontColorCustom();
    })
    return colors;
}

//
// Generate custom flashcards
//

// Get user input
const input = {
    front: document.querySelector("#front"),
    back: document.querySelector("#back"),
}

// Make an array to be filled with class Card instances
let customCardObjects = [];

// Add event listener on submit event
document.querySelector("#custom-fc-input").addEventListener("submit", event => {
    event.preventDefault();

    // Generate card element which consists of div and p elements
    document.querySelector("#custom-fc-wrapper").insertAdjacentHTML("beforeend", "<div class='card'><p class='cardText front'></p></div>");

    // If the new generated card is too low on the page, page will scroll to the bottom
    window.scrollTo(0,document.body.scrollHeight);

    // Make an object using the user input
    const sides = {
        "back": input.back.value,
        "front": input.front.value
    }

    // Get all so far generated p elements under custom-fc-wrapper div element
    const cards = document.querySelectorAll("#custom-fc-wrapper .cardText");

    // Make a single new instance of class Card
    // Pass sides = user input in the constructor and the most recent card element from cards array
    const newCard = new Card(sides, cards[cards.length-1], colorPickerCustom());

    //Add two event listeners, on click and on contextmenu event
    newCard.card.addEventListener("click", () => {
        console.log(newCard)
        const colors = colorPickerCustom();
        newCard.changeColors(colors);
        newCard.leftClick();
    });
    newCard.card.addEventListener("contextmenu", event => {
        event.preventDefault();
        newCard.rightClick();
    })

    // Save the newCard object in the array for custom cards
    customCardObjects.push(newCard);

    // Immediate setting after user picks color combination
    colorPickerCustom();

    // Clean the input form
    input.front.value = "";
    input.back.value = "";
});




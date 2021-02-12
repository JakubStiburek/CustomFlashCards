import {Card} from "./Card.js"
import {exampleCards} from "./exampleCards.js";

//
// Color picker
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

// Change all cards color according to what side is currently visible
const changeVisibleSideColor = (colorCombo) => {
    cards.forEach(card => {
        if(card.classList.contains(".front")){
            card.style.backgroundColor = colorCombo[0];
        }
        else{
            card.style.backgroundColor = colorCombo[1];
        }
    })
}

// User picks a color combination
const colorPicker = () => {
    // Listen to user choosing the color combination
    pair1.addEventListener("click", () => {
        changeVisibleSideColor(colorCombinations[0]);
        colors = colorCombinations[0];
    })
    pair2.addEventListener("click", () => {
        colors = colorCombinations[1];
        changeVisibleSideColor(colorCombinations[1]);
    })
    pair3.addEventListener("click", () => {
        colors = colorCombinations[2];
        changeVisibleSideColor(colorCombinations[2]);
    })
    pairInitial.addEventListener("click", () => {
        colors = colorCombinations[3];
        changeVisibleSideColor(colorCombinations[3]);
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
    const newCard = new Card(sides, cards[cards.length-1]);

    //Add two event listeners, on click and on contextmenu event
    newCard.card.addEventListener("click", () => {
        console.log(newCard)
        newCard.leftClick();
    });
    newCard.card.addEventListener("contextmenu", event => {
        event.preventDefault();
        newCard.rightClick();
    })

    // Save the newCard object in the array for custom cards
    customCardObjects.push(newCard);

    // Clean the input form
    input.front.value = "";
    input.back.value = "";
});




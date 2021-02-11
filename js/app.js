import {Card} from "./Card.js"
import {exampleCards} from "./exampleCards.js";

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
    cardObjects[i] = new Card(exampleCards[i], cards[i]);
}

// Add event listener on click event for card within each class Card instance
// Then add event listener on contextmenu event for card within each class Card instance
cardObjects.forEach(cardObject => {
    cardObject.card.addEventListener("click", () => {
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
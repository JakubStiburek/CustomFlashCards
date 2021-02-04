import {Card} from "./Card.js"
import {exampleCards} from "./exampleCards.js";

/* Make 9 example flashcards. */
for(let i=0; i < 9; i++){
    document.querySelector("#example-fc-wrapper").insertAdjacentHTML("afterbegin", "<p class='card front'></p>");
}

const cards = document.querySelectorAll("#example-fc-wrapper .card");
let cardObjects = [];
for(let i=0; i < 9; i++){
    cardObjects[i] = new Card (exampleCards[i], cards[i]);
}

cardObjects.forEach(cardObject => {
    cardObject.setFront();
    cardObject.card.addEventListener("click", () => {
        cardObject.clicked();
    })
})
/* Make 9 example flashcards. */

/* Make custom cards. */
const input = {
    front: document.querySelector("#front"),
    back: document.querySelector("#back"),
}
let customCardObjects = [];
document.querySelector("#custom-fc-input").addEventListener("submit", event => {
    event.preventDefault();
    const sides = {
        "back": input.back.value,
        "front": input.front.value
    }
    document.querySelector("#custom-fc-wrapper").insertAdjacentHTML("afterbegin", "<p class='card front'></p>");
    const card = document.querySelector("#custom-fc-wrapper .card");
    const newCard = new Card (sides, card);
    customCardObjects.push(newCard);
    customCardObjects.forEach(customCardObject => {
        customCardObject.setFront();
        customCardObject.card.addEventListener("click", () => {
            customCardObject.setBack();
            customCardObject.toggleClass();
        })
    })
})
/* Make custom cards. */
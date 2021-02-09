import {Card} from "./Card.js"
import {exampleCards} from "./exampleCards.js";

/* Make 9 example flashcards. */
for(let i=0; i < 8; i++){
    document.querySelector("#example-fc-wrapper").insertAdjacentHTML("afterbegin", "<div class='card'><p class='cardText front'></p></div>");
}

const cards = document.querySelectorAll("#example-fc-wrapper .cardText");
let cardObjects = [];
for(let i=0; i < 8; i++){
    cardObjects[i] = new Card(exampleCards[i], cards[i]);
    
}

cardObjects.forEach(cardObject => {
    cardObject.setFront();
    cardObject.card.addEventListener("click", () => {
        cardObject.leftClick();
    })
    cardObject.card.addEventListener("contextmenu", event => {
        event.preventDefault();
        cardObject.rightClick();
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
    document.querySelector("#custom-fc-wrapper").insertAdjacentHTML("beforeend", "<div class='card'><p class='cardText front'></p></div>");

    const sides = {
        "back": input.back.value,
        "front": input.front.value
    }
    const cards = document.querySelectorAll("#custom-fc-wrapper .cardText");
    const newCard = new Card(sides, cards[cards.length-1]);
    newCard.card.addEventListener("click", () => {
        console.log(newCard)
        newCard.leftClick();
    });
    newCard.card.addEventListener("contextmenu", event => {
        event.preventDefault();
        newCard.rightClick();
    })
    customCardObjects.push(newCard);
});
/* Make custom cards. */
export class Card {
    constructor(sides, card) {
        this.front = sides["front"];
        this.back = sides["back"];
        this.card = card;
        this.setFront()
    }

    // Set front side text
    setFront() {
        this.card.textContent = this.front;
    }

    // Set back side text
    setBack() {
        this.card.textContent = this.back;
    }

    // Toggle css classes back and front responsible for change of background colour when card is being turned
    toggleClass() {
        this.card.classList.toggle("back")
        this.card.classList.toggle("front")
    }

    // Turn the card
    leftClick() {
        if (this.card.classList.contains("front")) {
            this.setBack();
            this.toggleClass();
        } else {
            this.setFront();
            this.toggleClass();
        }
    }

    // Remove the p element but keep the div element, this leaves a blank spot on it's place
    rightClick() {
            this.card.remove();
    }
}
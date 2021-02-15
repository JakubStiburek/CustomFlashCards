export class Card {
    constructor(sides, card, colors) {
        this.front = sides["front"];
        this.back = sides["back"];
        this.card = card;
        this.colorFront = colors[0];
        this.colorBack = colors[1];
        this.setFront();
        this.setColorFront()
    }

    // Set front side text
    setFront() {
        this.card.textContent = this.front;
    }

    // Set back side text
    setBack() {
        this.card.textContent = this.back;
    }

    // Control which side is visible
    toggleClass() {
        this.card.classList.toggle("back")
        this.card.classList.toggle("front")
    }

    // Overwrite current color combination
    changeColors(newColors){
        this.colorFront = newColors[0];
        this.colorBack = newColors[1];
    }

    // Set color of card front side
    setColorFront() {
        this.card.style.backgroundColor = this.colorFront;
    }

    // Set color of card back side
    setColorBack() {
        this.card.style.backgroundColor = this.colorBack;
    }

    // Turn the card
    leftClick() {
        if (this.card.classList.contains("front")) {
            this.setBack();
            this.toggleClass();
            this.setColorBack();
        } else {
            this.setFront();
            this.toggleClass();
            this.setColorFront();
        }
    }

    // Remove the p element but keep the div element, this leaves a blank spot on it's place
    rightClick() {
            this.card.remove();
    }
}
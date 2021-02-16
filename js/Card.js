export class Card {
    constructor(sides, cardTextText, colors) {
        this.front = sides["front"];
        this.back = sides["back"];
        this.cardText = cardTextText;
        this.colorFront = colors[0];
        this.colorBack = colors[1];
        this.setFront();
        this.setColorFront()
    }

    // Set front side text
    setFront() {
        this.cardText.textContent = this.front;
    }

    // Set back side text
    setBack() {
        this.cardText.textContent = this.back;
    }

    // Control which side is visible
    toggleClass() {
        this.cardText.classList.toggle("back")
        this.cardText.classList.toggle("front")
    }

    // Overwrite current color combination
    changeColors(newColors){
        this.colorFront = newColors[0];
        this.colorBack = newColors[1];
    }

    // Set color of cardText front side
    setColorFront() {
        this.cardText.style.backgroundColor = this.colorFront;
    }

    // Set color of cardText back side
    setColorBack() {
        this.cardText.style.backgroundColor = this.colorBack;
    }

    // Turn the cardText
    leftClick() {
        if (this.cardText.classList.contains("front")) {
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
    removeCardText() {
            this.cardText.remove();
    }
}
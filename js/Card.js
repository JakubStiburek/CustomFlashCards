export class Card {
    constructor(sides, card) {
        this.front = sides["front"];
        this.back = sides["back"];
        this.card = card;
    }
    setFront() {
        this.card.textContent = this.front;
    }
    setBack() {
        this.card.textContent = this.back;
    }
    toggleClass() {
        this.card.classList.toggle("back")
        this.card.classList.toggle("front")
    }
    clicked() {
        if(this.card.classList.contains("front")){
            this.setBack();
            this.toggleClass();
        }
        else{
            this.setFront();
            this.toggleClass();
        }

    }
}
class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
    show() {
        return `${this.value} of ${this.suit}`;
    }
}
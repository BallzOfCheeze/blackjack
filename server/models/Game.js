const Deck = require('./Deck'); // Assuming you have a Deck class defined

class Game {
    constructor() {
        this.deck = new Deck();    // An instance of the Deck class
        this.players = [];         // Array to hold players in the game
        this.currentPlayerIndex = 0; // Index to track the current player's turn
        this.gameState = 'waiting'; // 'waiting', 'active', 'ended'
    }
}

module.exports = Game;

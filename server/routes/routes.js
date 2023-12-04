const express = require('express');
const router = express.Router();

const apiController = require('../controllers/apiController.js');
const gameControlller = require('../controllers/gameController.js');
const dealerController = require('../controllers/dealerController.js');

// General API route for checking server status
router.get('/status', apiController.checkStatus);

// Player related routes
router.post('/player/register', apiController.registerPlayer); // Register new player
router.post('/player/login', apiController.loginPlayer);       // Player login
router.get('/player/:id', apiController.getPlayerInfo);        // Get player info

// Game management routes
router.post('/game/create', gameControlller.createGame);           // Create a new game
router.post('/game/join', gameControlller.joinGame);               // Join an existing game
router.get('/game/:id', gameControlller.getGameStatus);            // Get current game status

// In-game actions
router.post('/game/:id/hit', gameControlller.playerHit);           // Player decides to hit
router.post('/game/:id/stand', gameControlller.playerStand);       // Player decides to stand
router.post('/game/:id/double', gameControlller.playerDoubleDown); // Player decides to double down
router.post('/game/:id/split', gameControlller.playerSplit);       // Player decides to split
router.post('/game/:id/insurance', gameControlller.playerInsurance);// Player takes insurance

// Dealer actions
router.get('/game/:id/dealer/action', dealerController.dealerAction); // Dealer takes action

// Betting
router.post('/game/:id/bet', gameControlller.placeBet);            // Place a bet

module.exports = router;

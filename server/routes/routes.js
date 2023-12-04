const express = require('express');
const router = express.Router();

const apiController = require('../controllers/apiController.js');
const dealerController = require('../controllers/dealerController.js');

// General API route for checking server status
router.get('/status', apiController.checkStatus);

// Player related routes
router.post('/player/register', apiController.registerPlayer); // Register new player
router.post('/player/login', apiController.loginPlayer);       // Player login
router.get('/player/:id', apiController.getPlayerInfo);        // Get player info

// Game management routes
router.post('/game/create', gameManager.createGame);           // Create a new game
router.post('/game/join', gameManager.joinGame);               // Join an existing game
router.get('/game/:id', gameManager.getGameStatus);            // Get current game status

// In-game actions
router.post('/game/:id/hit', gameManager.playerHit);           // Player decides to hit
router.post('/game/:id/stand', gameManager.playerStand);       // Player decides to stand
router.post('/game/:id/double', gameManager.playerDoubleDown); // Player decides to double down
router.post('/game/:id/split', gameManager.playerSplit);       // Player decides to split
router.post('/game/:id/insurance', gameManager.playerInsurance);// Player takes insurance

// Dealer actions
router.get('/game/:id/dealer/action', dealerController.dealerAction); // Dealer takes action

// Betting
router.post('/game/:id/bet', gameManager.placeBet);            // Place a bet

module.exports = router;

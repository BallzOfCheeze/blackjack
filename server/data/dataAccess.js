// Import the different storage implementations
const memoryStorage = require('./storage/memoryStorage');
const mysqlStorage = require('./storage/mysqlStorage');

// Use an environment variable or a config setting to determine the storage type
const useMySQL = process.env.USE_MYSQL === 'true';

const storage = useMySQL ? mysqlStorage : memoryStorage;

const dataAccess = {
    // Player-related operations
    addPlayer: (playerId, playerData) => {
        return storage.addPlayer(playerId, playerData);
    },
    getPlayer: (playerId) => {
        return storage.getPlayer(playerId);
    },
    updatePlayer: (playerId, newData) => {
        return storage.updatePlayer(playerId, newData);
    },
    deletePlayer: (playerId) => {
        return storage.deletePlayer(playerId);
    },

    // Game-related operations
    createGame: (gameId, gameData) => {
        return storage.createGame(gameId, gameData);
    },
    getGame: (gameId) => {
        return storage.getGame(gameId);
    },
    updateGame: (gameId, newData) => {
        return storage.updateGame(gameId, newData);
    },
    deleteGame: (gameId) => {
        return storage.deleteGame(gameId);
    },

    // Table-related operations
    createTable: (tableId, tableData) => {
        return storage.createTable(tableId, tableData);
    },
    getTable: (tableId) => {
        return storage.getTable(tableId);
    },
    updateTable: (tableId, newData) => {
        return storage.updateTable(tableId, newData);
    },
    deleteTable: (tableId) => {
        return storage.deleteTable(tableId);
    }
};

module.exports = dataAccess;

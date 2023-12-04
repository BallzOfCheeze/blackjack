let games = {}; // Stores game instances
let players = {}; // Stores player information
let tables = {}; // Stores table information

const memoryStorage = {
    // Player-related operations
    addPlayer: (playerId, playerData) => {
        players[playerId] = playerData;
    },
    getPlayer: (playerId) => {
        return players[playerId];
    },
    updatePlayer: (playerId, newData) => {
        if (players[playerId]) {
            players[playerId] = {...players[playerId], ...newData};
        }
    },
    deletePlayer: (playerId) => {
        delete players[playerId];
    },

    // Game-related operations
    createGame: (gameId, gameData) => {
        games[gameId] = gameData;
    },
    getGame: (gameId) => {
        return games[gameId];
    },
    updateGame: (gameId, newData) => {
        if (games[gameId]) {
            games[gameId] = {...games[gameId], ...newData};
        }
    },
    deleteGame: (gameId) => {
        delete games[gameId];
    },

    // Table-related operations
    createTable: (tableId, tableData) => {
        tables[tableId] = tableData;
    },
    getTable: (tableId) => {
        return tables[tableId];
    },
    updateTable: (tableId, newData) => {
        if (tables[tableId]) {
            tables[tableId] = {...tables[tableId], ...newData};
        }
    },
    deleteTable: (tableId) => {
        delete tables[tableId];
    }
};

module.exports = memoryStorage;

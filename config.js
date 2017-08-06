module.exports = {
    development: {
        clientUrl: 'http://10.0.0.176',
        clientPort: 3000,
        wsPort: 31385,
        cardReaderPort: 31386,
        database: {
            client: 'mysql',
            connection: {
                host: '127.0.0.1',
                port: '3306',
                user: 'pingpong',
                password: 'pingpong',
                database: 'pingpong',
            },
            migrations: {
                directory: __dirname + '/migrations',
                tableName: 'migrations'
            }
        }
    },
    production: {
        clientUrl: 'http://pingpong.local',
        clientPort: 3000,
        wsPort: 31385,
        database: {
            client: 'mysql',
            connection: {
                host: '127.0.0.1',
                port: 3306,
                user: 'pingpong',
                password: 'pingpong',
                database: 'pingpong',
            },
            migrations: {
                directory: __dirname + '/migrations',
                tableName: 'migrations'
            }
        },
        cardReaderPort: 31386
    },
    global: {
        sparkCore: {
            accessToken: undefined,
            id: undefined
        },
        serverSwitchLimit: 2, // How many points before service switches
        serverSwitchThreshold: 10, // When both players have reached this threshold, the server switches every time
        maxScore: 11,
        mustWinBy: 2,
        minPlayers: 2,
        maxPlayers: 2,
        winningViewDuration: 12000, // The duration to show the winning view for before returning to the leaderboard
        feelers: {
            pingInterval: 5000,
            pingThreshold: 250,
            undoThreshold: 1500
        },
        cardReader: {
            pingInterval: 30000,
            pingThreshold: 250
        }
    }
};

require('dotenv').config();
module.exports = {
    server: {
        env: process.env.NODE_ENV || 'local',
        port: process.env.PORT,
    },
    database: {
        dbUrl: process.env.DB_URL
    }
};
//# sourceMappingURL=index.js.map
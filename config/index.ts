require('dotenv').config()

export default {
    server: {
        env: process.env.NODE_ENV || 'local',
        port: process.env.PORT,
    },
    database: {
        dbUrl: process.env.DB_URL
    }
}
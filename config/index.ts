require('dotenv').config()
import jwtKey from './jwtKey'

export default {
    server: {
        env: process.env.NODE_ENV || 'local',
        port: process.env.PORT,
    },
    database: {
        client: process.env.POSTGRES_CLIENT,
        host: process.env.POSTGRES_HOST,
        port: process.env.POSTGRES_PORT,
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        name: process.env.POSTGRES_DB,
    },
    jwt: {
        expiration: process.env.JWT_EXPIRATION,
        privateKey: jwtKey[process.env.APP].todo.private,
        publicKey: jwtKey[process.env.APP].todo.public,
    },
}
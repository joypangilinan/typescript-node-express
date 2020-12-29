import Express from './express';
import DatabaseConnection from './database'
require('dotenv').config()


const start = () => {
    const expressLoader = new Express()
    DatabaseConnection();
    expressLoader.listen()
}

start()
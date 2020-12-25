import Express from './express';
import databaseConnection from '../database'
require('dotenv').config()


const start = () => {
    const expressLoader = new Express()
    databaseConnection();
    expressLoader.listen()
}

start()
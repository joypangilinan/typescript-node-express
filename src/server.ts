import Express from './express';
import Knex from './knex'

const start = () => {
    const expressLoader = new Express()
    const knexLoader = new Knex()

    knexLoader.initialize()
    expressLoader.listen()
}

start()
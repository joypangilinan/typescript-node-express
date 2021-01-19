require('dotenv').config()
import Knex from 'knex';
import { Model } from "objection"
import * as knexConfig from "../knexfile"
import config from '../config'

const { server } = config

class KnexLoader {
    constructor() {
    }

    public async initialize() {
        const knex = Knex(knexConfig[server.env])
        Model.knex(knex)
        console.log('# ObjectionJS with KnexJS Initialized... #')
    }
}

export default KnexLoader

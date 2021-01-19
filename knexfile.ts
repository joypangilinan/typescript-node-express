import Config from './config';
import * as Knex from 'knex';

const { database } = Config;

module.exports = {
  local: {
    client: database.client,
    connection: {
      host: database.host,
      database: database.name,
      user: database.user,
      password: database.password,
    },
    migrations: {
      directory: __dirname + `/src/db/migrations`,
      stub: __dirname + `/src/db/migration.stub`,
    },
    seeds: {
      directory: __dirname + `/src/db/seeds`,
    },
  }
} as Knex.Config;

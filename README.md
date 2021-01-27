
# Installation Guide

Download PostgreSQL for MacOS using Brew. [View more](https://gist.github.com/ibraheem4/ce5ccd3e4d7a65589ce84f2a3b7c23a3)

```bash
brew install postgresql
```

Create database in PostgreSQL, make sure you're inside psql

```bash
psql postgres
postgres=# CREATE DATABASE database_name;
```

Download [NodeJS](https://nodejs.org/en/download/)

Download [npm](https://www.npmjs.com/get-npm)

Download Knex CLI. [View more](http://knexjs.org/#Migrations-CLI)

```bash
npm install knex -g
```

# Architecture

Directory:

```bash
==========================================================================================================
src                                                     // source code of backend repository
    L build                                             // All javascript files
    L config                                            // configurations using .env
    L src                                               // entry point for src
        L db                                            // entry point for db layer
            L migrations                                // knex migrations for db
            L models                                    // Database models
            L migration.stub                            // template file for knex migrations
        L components                                    // template folder for every modules
            L index.ts                                  // group of modules
            L moduleName                                // folder per module
                L module.controller.ts                  // handles the REST api request
                L module.validator.ts                   // validating fields using joi
                L module.service.ts                     // all busines logic is here
                L index.ts                              // all router path or endpoints are here
        L utils                                         // folder for utils / global functions
            L joiValidator.ts                           // for fields validator
        L middlewares                                   // have access to the request and response object
            L passport.middleware.ts                    // authentication, for restricting endpoints
            L error.middleware.ts                       // handle error
        L express.ts                                    // Start the server
        L knex.ts                                       // Export the db connection and bind it with model
        L server.ts                                     // Application starting point
    L knexfile.ts                                       // knex connection config for different environments
    L package.json                                      // manage app dependencies and scripts
    L package.lock.json
    L tsconfig.json                                    // typescript configurations


==========================================================================================================
```

# Database Migration

Run all migrations that have not yet been run

```bash
knex migrate:latest
```

Check all knex-cli commands

```bash
knex --help
```

Checkout knex documentation [View more](http://knexjs.org/)

# Development

You need to install all dependencies in package.json

```bash
npm install
```

Make sure that you're connected to your local database to run the project

```bash
npm run dev
```

# Contributors
- [Joy Pangilinan]

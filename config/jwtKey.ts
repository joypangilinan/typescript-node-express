const fs = require('fs')

require('dotenv').config()

const localTodoPrivateKey = fs.readFileSync(__dirname + '/todo-private.pem')
const localTodoPublicKey = fs.readFileSync(__dirname + '/todo-public.pem')

const jwtKey = {
    local: {
        todo: {
            private: localTodoPrivateKey,
            public: localTodoPublicKey,
        }
    }
}

export default jwtKey

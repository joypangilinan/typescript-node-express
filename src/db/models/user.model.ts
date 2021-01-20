import { v4 as uuid } from 'uuid'
import { Model } from 'objection'
import bcrypt from 'bcryptjs'

class User extends Model {
    id!: string
    firstName?: string
    middleName?: string
    lastName?: string
    userName: string
    password: string
    createdAt: string
    updatedAt: string

    static tableName = 'users'

    static jsonSchema = {
        type: 'object',
        properties: {
            id: {
                type: 'string'
            },
            firstName: {
                type: ['string', null]
            },
            middleName: {
                type: ['string', null]
            },
            lastName: {
                type: ['string', null]
            },
            userName: {
                type: ['string']
            },
            password: {
                type: ['string']
            },
            updatedAt: {
                type: 'date',
            },
            createdAt: {
                type: 'date',
            },
        }
    }

    async $beforeInsert() {
        this.id = uuid()
        this.createdAt = new Date().toISOString()
        this.updatedAt = new Date().toISOString()

        this.password = bcrypt.hashSync(
            this.password,
            bcrypt.genSaltSync(10),
            null
        )
    }

    async $beforeUpdate() {
        this.updatedAt = new Date().toISOString()
    }

    toUserJSON() {
        const json = { ...this };

        delete json.password

        return json;
    }

    validatePassword(password) {
        return bcrypt.compareSync(password, this.password)
    }

}

export default User
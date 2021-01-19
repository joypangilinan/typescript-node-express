import { v4 as uuid } from 'uuid'
import { Model } from 'objection'

class Todo extends Model {
    id!: string
    task?: string
    status: number
    type: string
    updatedAt?: string
    createdAt: string

    static tableName = 'todos'

    static jsonSchema = {
        type: 'object',
        properties: {
            id: {
                type: 'string'
            },
            task: {
                type: 'string'
            },
            status: {
                type: 'number',
                default: 0,
            },
            type: {
                type: 'string'
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
    }

    async $beforeUpdate() {
        this.updatedAt = new Date().toISOString()
    }

}

export default Todo
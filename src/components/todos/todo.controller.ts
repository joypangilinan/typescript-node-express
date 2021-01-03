import { Request, Response, NextFunction, response } from 'express'
import TodoService from './todo.service'
import TodoValidator from './todo.validator';
import JoiValidator from '../../utils/joiValidator.utils'

export default {
    createTodo: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const todoService = new TodoService()
            const { error, value: validatedRequestBody } = JoiValidator(
                req.body,
                TodoValidator.createTodo
            );

            if (error) res.status(500).send(error.details);

            const todoInfo = validatedRequestBody;
            const result = await todoService.createTodo(todoInfo);

            return res.json(result)
        } catch (err) {
            console.log('CREATE TODO: ', err.message)
            next(err)
        }
    },
    getAllTodo: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const todoService = new TodoService()

            const result = await todoService.getAllTodo()

            return res.json(result)
        } catch (err) {
            console.log('GET ALL TODO: ', err.message)
            next(err)
        }
    }
}
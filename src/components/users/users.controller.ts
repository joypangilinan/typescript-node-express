import { Request, Response, NextFunction, response } from 'express'
import UserService from './users.service'

export default {
    getAllUsers: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userService = new UserService()

            const result = await userService.getAllUsers()

            return res.json({
                message: "Fetched data successfully",
                data: result
            })
        } catch (err) {
            console.log('GET ALL TODO: ', err.message)
            next(err)
        }
    },
}
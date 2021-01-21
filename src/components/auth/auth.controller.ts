import { Request, Response, NextFunction, response } from 'express'
import AuthService from './auth.service'
import UserService from '../users/users.service'
import AuthValidator from './auth.validator';
import JoiValidator from '../../utils/joiValidator.utils'
import { ErrorHandler } from '../../middlewares/error.middleware'

const authService = new AuthService()
const userService = new UserService()

export default {
    register: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { error, value: validatedRequestBody } = JoiValidator(
                req.body,
                AuthValidator.createUser
            );

            if (error) throw new ErrorHandler(422, error.details)

            const data = validatedRequestBody;
            delete data.confirmPassword

            const result = await authService.register(data);

            return res.json({
                message: "Registered new user successfully",
                data: result
            })
        } catch (err) {
            console.log('REGISTER: ', err.message)
            next(err)
        }
    },
    login: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { error, value: validatedRequestBody } = JoiValidator(
                req.body,
                AuthValidator.loginUser
            );

            if (error) throw new ErrorHandler(422, error.details)

            const data = validatedRequestBody

            const user = await userService.getUserByUsername(data.userName)

            if (!user.validatePassword(data.password)) throw new ErrorHandler(401, "Invalid Username or password")

            const token = await authService.login(user)

            return res.json({
                message: "Logged in successfully",
                token,
                data: user.toUserJSON()
            })

        } catch (err) {
            console.log('LOGIN: ', err.message)
            next(err)
        }
    }
}
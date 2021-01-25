import User from "../../db/models/user.model";
import { ErrorHandler } from '../../middlewares/error.middleware'
import JWT from 'jsonwebtoken'
import Config from '../../../config'

const { jwt } = Config

interface IUserBody {
    id: string
    firstName?: string
    middleName?: string
    lastName?: string
    userName: string
    password: string
}

class AuthService {
    constructor() { }

    async register(data: IUserBody) {
        const user = await User.query().where('userName', data.userName)

        if (user.length > 0) throw new ErrorHandler(400, 'Username is already exist')

        const newUser = await User.query().insert(data)

        return newUser.toUserJSON()
    };

    async login(data: IUserBody) {
        const payload = {
            ...data,
        }

        return JWT.sign(payload, jwt.privateKey, { algorithm: 'RS256' })
    }

}

export default AuthService;

import Users from "../../db/models/user.model";
import { ErrorHandler } from '../../middlewares/error.middleware'

class UserService {
    constructor() { }

    async getAllUsers() {
        const users = await Users.query()

        return users
    }

    async getUserByUsername(username: string) {
        const user = await Users.query().where('userName', username)

        if (user.length <= 0) throw new ErrorHandler(404, "Username is not existing")

        return user[0]
    }

}

export default UserService;
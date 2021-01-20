import * as express from 'express'
import Todos from './todos/index'
import Auth from './auth/index'
import Users from './users/index'

let router = express.Router()

router.use(Todos)
router.use(Auth)
router.use(Users)

export default router
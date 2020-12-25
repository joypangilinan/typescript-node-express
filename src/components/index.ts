import * as express from 'express'
import Todos from './todos/index'

let router = express.Router()

router.use(Todos)

export default router
import express from 'express';
import TodoController from './todo.controller';
import passport from '../../middlewares/passport.middleware'
const todosRouter = express.Router();

todosRouter.post('/todos', passport.authenticate('jwt'), TodoController.createTodo);
todosRouter.get('/todos', passport.authenticate('jwt'), TodoController.getAllTodo);

export default todosRouter;

import express from 'express';
import TodoController from './todo.controller';
const todosRouter = express.Router();

todosRouter.post('/todos', TodoController.createTodo);
todosRouter.get('/todos', TodoController.getAllTodo);

export default todosRouter;

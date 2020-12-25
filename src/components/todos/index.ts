import express from 'express'
import todoController from './todo.controller';
import TodoController from './todo.controller';
let todosRouter = express.Router();

todosRouter.post("/todos", TodoController.createTodo);
todosRouter.get('/todos', todoController.getAllTodo)

export default todosRouter
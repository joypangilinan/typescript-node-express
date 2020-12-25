"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todo_controller_1 = __importDefault(require("./todo.controller"));
// let todosRouter = express.Router();
// todosRouter.get("/todos/type/:type", todosController.todosByType);
// todosRouter.post("/todos", TodoController.createTodo);
// todosRouter.get("/todos/:id", todosController.todo);
// todosRouter.put("/todos/:id", todosController.taskCompleted);
// todosRouter.delete("/todos/:id", todosController.deleteTodo);
exports.default = (router) => {
    router.post("/todos", todo_controller_1.default.createTodo);
};
//# sourceMappingURL=index.js.map
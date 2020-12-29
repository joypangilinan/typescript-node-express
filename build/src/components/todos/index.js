"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todo_controller_1 = __importDefault(require("./todo.controller"));
const todo_controller_2 = __importDefault(require("./todo.controller"));
let todosRouter = express_1.default.Router();
todosRouter.post("/todos", todo_controller_2.default.createTodo);
todosRouter.get('/todos', todo_controller_1.default.getAllTodo);
exports.default = todosRouter;
//# sourceMappingURL=index.js.map
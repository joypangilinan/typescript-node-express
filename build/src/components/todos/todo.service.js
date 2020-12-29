"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todo_model_1 = __importDefault(require("../../models/todo.model"));
class TodoService {
    constructor() { }
    async createTodo(todoInfo) {
        const todo = await todo_model_1.default.create(Object.assign({}, todoInfo));
        await todo.save();
        return {
            todo,
        };
    }
    ;
    async getAllTodo() {
        const todos = await todo_model_1.default.find();
        return todos;
    }
}
exports.default = TodoService;
//# sourceMappingURL=todo.service.js.map
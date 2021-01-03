"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todo_model_1 = __importDefault(require("../../models/todo.model"));
const http_error_1 = __importDefault(require("http-error"));
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
    async updateTaskCompleted(id) {
        const todo = await todo_model_1.default.findOne({ _id: id }, { _id: 0, completed: 1 });
        if (!todo)
            throw http_error_1.default.NotFound();
        const updatedTodo = await todo_model_1.default.findOneAndUpdate({ _id: id }, {
            completed: !todo['completed']
        }, { new: true });
        return updatedTodo;
    }
}
exports.default = TodoService;
//# sourceMappingURL=todo.service.js.map
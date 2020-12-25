"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todo_service_1 = __importDefault(require("./todo.service"));
exports.default = {
    createTodo: async (req, res, next) => {
        try {
            const todoService = new todo_service_1.default();
            // const { error, value: validatedRequestBody } = joiValidator(
            //     req.body,
            //     todosSchema.createTodo
            //   );
            //   if (error) res.status(500).send(error.details);
            //   const todoInfo = validatedRequestBody;
            const result = await todoService.createTodo(req.body);
            return res.json(result);
        }
        catch (err) {
            console.log('GET DRIVER PROFILE: ', err.message);
            next(err);
        }
    }
};
//# sourceMappingURL=todo.controller.js.map
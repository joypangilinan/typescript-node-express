"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const todoSchema = {};
todoSchema.createTodo = joi_1.default.object({
    task: joi_1.default.string().required(),
    type: joi_1.default.string().valid("work", "personal").required(),
});
exports.default = todoSchema;
//# sourceMappingURL=todo.validator.js.map
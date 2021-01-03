import Joi from "joi";

const todoSchema: { [key: string]: any } = {};

todoSchema.createTodo = Joi.object({
    task: Joi.string().required(),
    type: Joi.string().valid("work", "personal").required(),
});


export default todoSchema;

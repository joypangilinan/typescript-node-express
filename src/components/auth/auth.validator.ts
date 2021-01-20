import Joi from "joi";

const todoSchema: { [key: string]: any } = {};

todoSchema.createUser = Joi.object({
    firstName: Joi.string().required(),
    middleName: Joi.string().allow('', null),
    lastName: Joi.string().required(),
    userName: Joi.string().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.any().equal(Joi.ref('password'))
        .required()
        .label('Confirm password')
        .messages({ 'any.only': '{{#label}} does not match' })
});

todoSchema.loginUser = Joi.object({
    userName: Joi.string().required(),
    password: Joi.string().required(),
})

export default todoSchema;

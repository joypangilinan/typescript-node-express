import express from 'express';
import AuthController from './auth.controller';
const authRouter = express.Router();

authRouter.post('/auth/register', AuthController.register);
authRouter.post('/auth/login', AuthController.login);

export default authRouter;

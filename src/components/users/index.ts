import express from 'express';
import UserController from './users.controller';
const usersRouter = express.Router();

usersRouter.get('/users', UserController.getAllUsers);

export default usersRouter;

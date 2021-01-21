import express from 'express';
import UserController from './users.controller';
import passport from '../../middlewares/passport.middleware'
const usersRouter = express.Router();

usersRouter.get('/users', passport.authenticate('jwt'), UserController.getAllUsers);

export default usersRouter;

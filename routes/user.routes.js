import { Router } from "express";

const userRouter = Router();

userRouter.get('/', (req, res) => res.send({ title: 'GET all users'}));

userRouter.get('/:id', (req, res) => res.send({ title: 'GET user details'}));

userRouter.post('/', (req, res) => res.send({ title: 'Create a new user'}));

userRouter.put('/:id', (req, res) => res.send({ title: 'UPDATE the user'}));

userRouter.delete('/:id', (req, res) => res.send({ title: 'DELETE user'}));

export default userRouter;
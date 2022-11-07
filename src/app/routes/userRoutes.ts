import express from "express";
import { registerValidator } from "../middlewares/validateUser";
const userRoutes=express.Router();

userRoutes.post('/users',registerValidator);

export default userRoutes;
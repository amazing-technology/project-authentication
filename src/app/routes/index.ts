import express from "express";
import userRoutes from "./userRoutes";
const indexRouter=express.Router();

indexRouter.use('/api/v1',userRoutes);

export default indexRouter;
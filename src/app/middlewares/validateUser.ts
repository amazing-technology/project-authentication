import { Request,Response } from "express";
import Joi from 'joi';

export const registerValidator=(req:Request,res:Response,next:Function)=>{
  const userSchema= Joi.object().keys({
    firstname:Joi.string().required(),
    lastname:Joi.string().required(),
    email: Joi.string().required(),
    phoneNumber:Joi.string().required()
  });
  const {error}=userSchema.validate(req.body);
  if (error) {
    return res.status(400).send({
      status: 400,
      data: { message: error.details[0].message.replace(/[/"]+/g, ''),  }
    });
  }
  next();
}

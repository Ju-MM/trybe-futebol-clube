import * as Joi from 'joi';
import { NextFunction, Request, Response } from 'express';

export default function validateBody(req: Request, _res: Response, next: NextFunction) {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required().min(6),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    error.message = 'All fields must be filled';
    throw error;
  }
  next();
}

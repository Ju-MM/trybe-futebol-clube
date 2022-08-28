import * as Joi from 'joi';
import { Request, Response } from 'express';

export default function validateBody(req: Request, _res: Response) {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required().min(6),
  });

  const { error, value } = schema.validate(req.body);
  if (error) {
    error.message = error.details[0].message;
    throw error;
  }
  return value;
}

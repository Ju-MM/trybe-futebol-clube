import { NextFunction, Request, Response } from 'express';
import JwtService from '../utils/jwtService';

export interface IResRole extends Response {
  role: string
}

export default function validateToken(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization;

  const userData = JwtService.validateToken(token) as { role: string };

  const roleInfo: IResRole = res as IResRole;

  roleInfo.role = userData.role;

  next();
}

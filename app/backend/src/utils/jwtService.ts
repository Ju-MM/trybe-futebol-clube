import 'dotenv/config';
import { sign, verify } from 'jsonwebtoken';
import User from '../database/models/user';
import NotFoundError from '../middlewares/NotFoundError';

export default class JwtService {
  static createToken(payload: User): string {
    const { id: number, role: string } = payload;
    return sign({ id: number, role: string }, process.env.JWT_SECRET || 'Secret');
  }

  static validateToken(token: string | undefined) {
    if (!token) throw new NotFoundError('Token must be a valid token');
    try {
      const data = verify(token, process.env.JWT_SECRET || 'Secret');
      return data;
    } catch (error) {
      if (error) {
        throw new NotFoundError('Token must be a valid token');
      }
    }
  }
}

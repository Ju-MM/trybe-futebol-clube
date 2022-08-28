import 'dotenv/config';
import { sign } from 'jsonwebtoken';

export default class JwtService {
  static createToken(payload: { id: number, email: string }): string {
    return sign(payload, process.env.JWT_SECRET || 'Secret');
  }
}

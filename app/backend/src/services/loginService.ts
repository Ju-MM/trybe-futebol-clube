/* eslint-disable class-methods-use-this */
import User from '../database/models/user';
import { IService, IUser } from '../interfaces/IService';
import NotFoundError from '../middlewares/NotFoundError';
import passwordService from '../utils/passwordService';
import JwtService from '../utils/jwtService';

class LoginService implements IService<User> {
  email: string;
  password: string;
  async list(): Promise<User[]> {
    const users: User[] = await User.findAll();
    return users;
  }

  async login(userInfo: IUser): Promise<string | null> {
    const user: User | null = await User.findOne({ where: { email: userInfo.email } });

    if (!user) {
      throw new NotFoundError('Incorrect email or password');
    }

    const passwordValid = passwordService.compare(userInfo.password, user.password);

    if (!passwordValid) {
      throw new NotFoundError('Incorrect email or password');
    }

    const token = JwtService.createToken({
      id: user.id,
      email: user.email,
    });

    return token;
  }
}

export default LoginService;

/* eslint-disable class-methods-use-this */
import User from '../database/models/user';
import { IService } from '../interfaces/IService';

class LoginService implements IService<User> {
  async list(): Promise<User[]> {
    const users: User[] = await User.findAll();
    return users;
  }
}

export default LoginService;

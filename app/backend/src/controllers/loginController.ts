import { Request, Response } from 'express';
import { IService } from '../interfaces/IService';
import User from '../database/models/user';
import { IResRole } from '../middlewares/validateToken';

class LoginController {
  constructor(private loginService: IService<User>) { }

  async list(req: Request, res: Response): Promise<void> {
    const users = await this.loginService.list();
    res.status(200).json(users);
  }

  async login(req: Request, res: Response): Promise<void> {
    const token = await this.loginService.login(req.body);
    res.status(200).json({ token });
  }

  // eslint-disable-next-line class-methods-use-this
  validate(_req: Request, res: Response) {
    const roleInfo: IResRole = res as IResRole;
    res.status(200).json({ role: roleInfo.role });
  }
}

export default LoginController;

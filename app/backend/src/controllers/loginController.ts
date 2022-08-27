// import { LoginService } from '../services/loginService';
import { Request, Response } from 'express';
import { IService } from '../interfaces/IService';
import User from '../database/models/user';

class LoginController {
  constructor(private loginService: IService<User>) { }

  async list(req: Request, res: Response): Promise<void> {
    const users = await this.loginService.list();
    res.status(200).json(users);
  }

  // async validateLogin(req: Request, res: Response): Promise<void> {
  //   const user = await this.loginService.login(req.body);
  //   res.status(201).json(user);
  // }
  // PRECISA VERIFICAR ESSE PARA CRIAR O USUÁRIO E TRAZER O TOKEN???
}

export default LoginController;

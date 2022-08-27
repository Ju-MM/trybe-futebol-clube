import { Router } from 'express';
import LoginController from '../controllers/loginController';
import LoginService from '../services/loginService';

const router = Router();

const loginService = new LoginService();
const loginController = new LoginController(loginService);

router.get('/', (req, res) => loginController.list(req, res));
// router.post('/', loginController.validateLogin); // rota que deve ser criada no requisito 03.

export default router;

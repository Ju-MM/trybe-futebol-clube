import { Router } from 'express';
import validateBody from '../middlewares/validateLogin';
import LoginController from '../controllers/loginController';
import LoginService from '../services/loginService';

const router = Router();

const loginService = new LoginService();
const loginController = new LoginController(loginService);

router.get('/', (req, res) => loginController.list(req, res));
router.post('/', validateBody, (req, res) => loginController.login(req, res));

export default router;

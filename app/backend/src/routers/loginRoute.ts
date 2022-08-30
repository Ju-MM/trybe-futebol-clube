import { Router } from 'express';
import validateBody from '../middlewares/validateLogin';
import LoginController from '../controllers/loginController';
import LoginService from '../services/loginService';
import validateToken from '../middlewares/validateToken';

const router = Router();

const loginService = new LoginService();
const loginController = new LoginController(loginService);

router.get('/validate', validateToken, (req, res) => loginController.validate(req, res));
router.get('/', (req, res) => loginController.list(req, res));
router.post('/', validateBody, (req, res) => loginController.login(req, res));

export default router;

import { Router } from 'express';
import MatchController from '../controllers/matchController';
import MatchService from '../services/matchService';
import validateToken from '../middlewares/validateToken';

const router = Router();

const matchService = new MatchService();
const matchController = new MatchController(matchService);

router.get('/', (req, res) => matchController.list(req, res));
router.post('/', validateToken, (req, res) => matchController.createMatch(req, res));
router.patch('/:id/finish', (req, res) => matchController.finishedMatch(req, res));
router.patch('/:id', (req, res) => matchController.changeMatch(req, res));

export default router;

import { Router } from 'express';
import MatchController from '../controllers/matchController';
import MatchService from '../services/matchService';

const router = Router();

const matchService = new MatchService();
const matchController = new MatchController(matchService);

router.get('/', (req, res) => matchController.list(req, res));

export default router;

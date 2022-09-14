import { Router } from 'express';
import LeaderboardController from '../controllers/leaderboardController';
import LeaderboardService from '../services/leaderboardService';

const router = Router();

const leaderboardService = new LeaderboardService();
const leaderboardController = new LeaderboardController(leaderboardService);

router.get('/', (req, res) => leaderboardController.listAll(req, res));
router.get('/home', (req, res) => leaderboardController.listHome(req, res));
router.get('/away', (req, res) => leaderboardController.listAway(req, res));

export default router;

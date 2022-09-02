import { Router } from 'express';
import TeamController from '../controllers/teamController';
import TeamService from '../services/teamService';

const router = Router();

const teamService = new TeamService();
const teamController = new TeamController(teamService);

router.get('/', (req, res) => teamController.list(req, res));
router.get('/:id', (req, res) => teamController.listTeam(req, res));

export default router;

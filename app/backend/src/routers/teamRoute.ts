import { Router } from 'express';
import TeamController from '../controllers/teamController';
import TeamService from '../services/teamService';

const router = Router();

const teamService = new TeamService(); // criando
const teamController = new TeamController(teamService); // criando

router.get('/', (req, res) => teamController.list(req, res));

export default router;

import { Request, Response } from 'express';
import { ITeamService } from '../interfaces/ITeamService';
import Team from '../database/models/team';

class TeamController {
  constructor(private teamService: ITeamService<Team>) { }

  async list(req: Request, res: Response): Promise<void> {
    const teams = await this.teamService.list();
    res.status(200).json(teams);
  }

  async listTeam(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const team = await this.teamService.getTeam(Number(id));
    res.status(200).json(team);
  }
}

export default TeamController;

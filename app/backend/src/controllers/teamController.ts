import { Request, Response } from 'express';
import { ITeamService } from '../interfaces/ITeamService';
import Team from '../database/models/team';

class TeamController {
  constructor(private teamService: ITeamService<Team>) { }

  async list(req: Request, res: Response): Promise<void> {
    const teams = await this.teamService.list();
    res.status(200).json(teams);
  }
}

export default TeamController;

import { Request, Response } from 'express';
import { IleaderboardService } from '../interfaces/IleaderboardService';

class LeaderboardController {
  constructor(private leaderboardService: IleaderboardService) { }

  async list(req: Request, res: Response): Promise<void> {
    const homeTeamsClassification = await this.leaderboardService.listHomeTeam();
    res.status(200).json(homeTeamsClassification);
  }
}

export default LeaderboardController;

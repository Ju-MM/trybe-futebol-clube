import { Request, Response } from 'express';
import { IleaderboardService } from '../interfaces/IleaderboardService';

class LeaderboardController {
  constructor(private leaderboardService: IleaderboardService) { }

  async listHome(req: Request, res: Response): Promise<void> {
    const homeTeamsClassification = await this.leaderboardService.listHomeTeam();
    res.status(200).json(homeTeamsClassification);
  }

  async listAway(req: Request, res: Response): Promise<void> {
    const awayTeamsClassification = await this.leaderboardService.listAwayTeam();
    res.status(200).json(awayTeamsClassification);
  }
}

export default LeaderboardController;

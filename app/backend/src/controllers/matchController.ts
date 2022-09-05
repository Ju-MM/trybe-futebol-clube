import { Request, Response } from 'express';
import { IMatchService } from '../interfaces/IMatchService';
import Match from '../database/models/match';

class MatchController {
  constructor(private matchService: IMatchService<Match>) { }

  async list(req: Request, res: Response): Promise<void> {
    const matches = await this.matchService.list();
    res.status(200).json(matches);
  }
}

export default MatchController;

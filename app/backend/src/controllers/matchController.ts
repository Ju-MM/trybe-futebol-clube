import { Request, Response } from 'express';
import { IMatchService } from '../interfaces/IMatchService';
import Match from '../database/models/match';

class MatchController {
  constructor(private matchService: IMatchService<Match>) { }

  async list(req: Request, res: Response): Promise<void> {
    const { inProgress } = req.query;
    const turnToBool = inProgress === 'true';
    let matches: Match[] | undefined = [];

    if (inProgress === undefined) {
      matches = await this.matchService.list();
    } else {
      matches = await this.matchService.list(turnToBool);
    }
    res.status(200).json(matches);
  }
}

export default MatchController;

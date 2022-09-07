/* eslint-disable class-methods-use-this */
import Match from '../database/models/match';
import { IMatchService } from '../interfaces/IMatchService';
import Teams from '../database/models/team';

class MatchService implements IMatchService<Match> {
  includeTeamNameInfo = [{
    model: Teams, foreignkey: 'homeTeam', as: 'teamHome', attributes: ['teamName'] },
  { model: Teams, foreignkey: 'awayTeam', as: 'teamAway', attributes: ['teamName'] }];

  async list(inProgress: boolean): Promise<Match[] | undefined> {
    let matches: Match[] = [];

    if (inProgress === undefined) {
      matches = await Match
        .findAll({ include: this.includeTeamNameInfo });
    } else {
      matches = await Match
        .findAll({ where: { inProgress },
          include: this.includeTeamNameInfo });
    }
    return matches;
  }
}

export default MatchService;

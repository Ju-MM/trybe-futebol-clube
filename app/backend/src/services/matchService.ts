/* eslint-disable class-methods-use-this */
import Match from '../database/models/match';
import { IMatchService, IMatchInfos, IChangeMatchInfos } from '../interfaces/IMatchService';
import Teams from '../database/models/team';
import TeamNotFoundError from '../middlewares/TeamNotFoundError';
import EqualTeamsError from '../middlewares/EqualTeamsError';

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

  async validateBody({ homeTeam, awayTeam }: any): Promise<void> {
    const homeTeamId = await Teams.findByPk(homeTeam);
    const awayTeamId = await Teams.findByPk(awayTeam);

    if (!homeTeamId || !awayTeamId) {
      throw new TeamNotFoundError('There is no team with such id!');
    }
    if (homeTeamId.id === awayTeamId.id) {
      throw new EqualTeamsError('It is not possible to create a match with two equal teams');
    }
  }

  async create(matchInfos: IMatchInfos): Promise<object> {
    const createdMatch = await Match.create({ ...matchInfos, inProgress: true });
    return createdMatch;
  }

  async update(id: number): Promise<void> {
    await Match.findByPk(id);
    const updateId = { inProgress: false };
    await Match.update(updateId, { where: { id } });
  }

  async findAndUpdateMatch(id: number, infoToChange: IChangeMatchInfos): Promise<object> {
    await Match.findByPk(id);
    const changedInfo: object = await Match.update(infoToChange, { where: { id } });
    return changedInfo;
  }
}

export default MatchService;

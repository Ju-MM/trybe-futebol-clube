/* eslint-disable class-methods-use-this */
import Team from '../database/models/team';
import { ITeamService } from '../interfaces/ITeamService';

class TeamService implements ITeamService<Team> {
  async list(): Promise<Team[]> {
    const teams: Team[] = await Team.findAll();
    return teams;
  }
}

export default TeamService;

/* eslint-disable class-methods-use-this */
import Team from '../database/models/team';
import { ITeamService } from '../interfaces/ITeamService';

class TeamService implements ITeamService<Team> {
  id: number;
  teamName: string;

  async list(): Promise<Team[]> {
    const teams: Team[] = await Team.findAll();
    return teams;
  }

  async getTeam(id: number): Promise<Team | null> {
    const team: Team | null = await Team.findByPk(id);
    return team;
  }
}

export default TeamService;

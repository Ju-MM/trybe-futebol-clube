/* eslint-disable class-methods-use-this */
import { QueryTypes } from 'sequelize';
import sequelize from '../database/models';
import { IleaderboardService, IleaderboardInfos } from '../interfaces/IleaderboardService';

const queryHomeTeam = `SELECT 
    tm.team_name AS name,
    SUM(CASE WHEN mat.home_team_goals>mat.away_team_goals THEN 1 ELSE 0 END) * 3 +
      SUM(CASE WHEN mat.home_team_goals=mat.away_team_goals THEN 1 ELSE 0 END) * 1 AS totalPoints,
    COUNT(mat.home_team) AS totalGames,
    SUM(CASE WHEN mat.home_team_goals>mat.away_team_goals THEN 1 ELSE 0 END) AS totalVictories,
    SUM(CASE WHEN mat.home_team_goals=mat.away_team_goals THEN 1 ELSE 0 END) AS totalDraws,
    SUM(CASE WHEN mat.home_team_goals<mat.away_team_goals THEN 1 ELSE 0 END) AS totalLosses,
    SUM(mat.home_team_goals) AS goalsFavor,
    SUM(mat.away_team_goals) AS goalsOwn,
    SUM(mat.home_team_goals) - SUM(mat.away_team_goals) AS goalsBalance,
    CAST((SUM(CASE WHEN mat.home_team_goals>mat.away_team_goals THEN 1 ELSE 0 END) * 3 +
      SUM(CASE WHEN mat.home_team_goals=mat.away_team_goals THEN 1 ELSE 0 END)) /
        (COUNT(mat.home_team) * 3) * 100 AS DECIMAL(10, 2)) AS efficiency
  FROM TRYBE_FUTEBOL_CLUBE.matches mat
  INNER JOIN TRYBE_FUTEBOL_CLUBE.teams tm
  ON mat.home_team = tm.id
  WHERE mat.in_progress IS NOT TRUE
  GROUP BY mat.home_team
  ORDER BY totalPoints DESC, goalsBalance DESC, goalsFavor DESC;`;

class LeaderboardService implements IleaderboardService {
  async listHomeTeam(): Promise<IleaderboardInfos[]> {
    const homeTeamsClassification: IleaderboardInfos[] = await sequelize
      .query(queryHomeTeam, { type: QueryTypes.SELECT });
    return homeTeamsClassification;
  }
}

export default LeaderboardService;

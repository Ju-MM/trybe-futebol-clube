/* eslint-disable class-methods-use-this */
import { QueryTypes } from 'sequelize';
import sequelize from '../database/models';
import { IleaderboardService, IleaderboardInfos } from '../interfaces/IleaderboardService';

const queryAllTeams = `SELECT
  result.name,
  SUM(result.totalPoints) AS totalPoints,
  SUM(result.totalGames) AS totalGames,
  SUM(result.totalVictories) AS totalVictories,
  SUM(result.totalDraws) AS totalDraws ,
  SUM(result.totalLosses) AS totalLosses,
  SUM(result.goalsFavor) AS goalsFavor,
  SUM(result.goalsOwn) AS goalsOwn,
  SUM(result.goalsBalance) AS goalsBalance,
  CAST(SUM(result.totalPoints) / (SUM(result.totalGames) * 3) * 100 AS DECIMAL(10, 2)) AS efficiency
FROM ((SELECT
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
GROUP BY mat.home_team)
  UNION All
  (SELECT 
  tm.team_name AS name,
  SUM(CASE WHEN mat.away_team_goals>mat.home_team_goals THEN 1 ELSE 0 END) * 3 +
    SUM(CASE WHEN mat.away_team_goals=mat.home_team_goals THEN 1 ELSE 0 END) * 1 AS totalPoints,
  COUNT(mat.away_team) AS totalGames,
  SUM(CASE WHEN mat.away_team_goals>mat.home_team_goals THEN 1 ELSE 0 END) AS totalVictories,
  SUM(CASE WHEN mat.away_team_goals=mat.home_team_goals THEN 1 ELSE 0 END) AS totalDraws,
  SUM(CASE WHEN mat.away_team_goals<mat.home_team_goals THEN 1 ELSE 0 END) AS totalLosses,
  SUM(mat.away_team_goals) AS goalsFavor,
  SUM(mat.home_team_goals) AS goalsOwn,
   SUM(mat.away_team_goals) - SUM(mat.home_team_goals) AS goalsBalance,
CAST((SUM(CASE WHEN mat.away_team_goals>mat.home_team_goals THEN 1 ELSE 0 END) * 3 +
  SUM(CASE WHEN mat.away_team_goals=mat.home_team_goals THEN 1 ELSE 0 END)) /
    (COUNT(mat.home_team) * 3) * 100 AS DECIMAL(10, 2)) AS efficiency
FROM TRYBE_FUTEBOL_CLUBE.matches mat
INNER JOIN TRYBE_FUTEBOL_CLUBE.teams tm
ON mat.away_team = tm.id
WHERE mat.in_progress IS NOT TRUE
GROUP BY mat.away_team)) AS result
GROUP BY result.name
ORDER BY totalPoints DESC, goalsBalance DESC, goalsFavor DESC, goalsOwn DESC;`;

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

const queryAwayTeam = `SELECT 
  tm.team_name AS name,
  SUM(CASE WHEN mat.away_team_goals>mat.home_team_goals THEN 1 ELSE 0 END) * 3 +
    SUM(CASE WHEN mat.away_team_goals=mat.home_team_goals THEN 1 ELSE 0 END) * 1 AS totalPoints,
  COUNT(mat.away_team) AS totalGames,
  SUM(CASE WHEN mat.away_team_goals>mat.home_team_goals THEN 1 ELSE 0 END) AS totalVictories,
  SUM(CASE WHEN mat.away_team_goals=mat.home_team_goals THEN 1 ELSE 0 END) AS totalDraws,
  SUM(CASE WHEN mat.away_team_goals<mat.home_team_goals THEN 1 ELSE 0 END) AS totalLosses,
  SUM(mat.away_team_goals) AS goalsFavor,
  SUM(mat.home_team_goals) AS goalsOwn,
  SUM(mat.away_team_goals) - SUM(mat.home_team_goals) AS goalsBalance,
  CAST((SUM(CASE WHEN mat.away_team_goals>mat.home_team_goals THEN 1 ELSE 0 END) * 3 +
    SUM(CASE WHEN mat.away_team_goals=mat.home_team_goals THEN 1 ELSE 0 END)) /
      (COUNT(mat.home_team) * 3) * 100 AS DECIMAL(10, 2)) AS efficiency
FROM TRYBE_FUTEBOL_CLUBE.matches mat
INNER JOIN TRYBE_FUTEBOL_CLUBE.teams tm
ON mat.away_team = tm.id
WHERE mat.in_progress IS NOT TRUE
GROUP BY mat.away_team
ORDER BY totalPoints DESC, goalsBalance DESC, goalsFavor DESC;`;

class LeaderboardService implements IleaderboardService {
  async listAllTeams(): Promise<IleaderboardInfos[]> {
    const allTeamsClassification: IleaderboardInfos[] = await sequelize
      .query(queryAllTeams, { type: QueryTypes.SELECT });
    return allTeamsClassification;
  }

  async listHomeTeam(): Promise<IleaderboardInfos[]> {
    const homeTeamsClassification: IleaderboardInfos[] = await sequelize
      .query(queryHomeTeam, { type: QueryTypes.SELECT });
    return homeTeamsClassification;
  }

  async listAwayTeam(): Promise<IleaderboardInfos[]> {
    const awayTeamsClassification: IleaderboardInfos[] = await sequelize
      .query(queryAwayTeam, { type: QueryTypes.SELECT });
    return awayTeamsClassification;
  }
}

export default LeaderboardService;

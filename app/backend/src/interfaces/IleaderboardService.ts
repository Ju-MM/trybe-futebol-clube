export interface IleaderboardInfos {
  name: string,
  totalPoints: number,
  totalGames: number,
  totalVictories: number,
  totalDraws: number,
  totalLosses: number,
  goalsFavor: number,
  goalsOwn: number,
  goalsBalance: number,
  efficiency: number
}

export interface IleaderboardService{
  listAllTeams(): Promise<IleaderboardInfos[]>
  listHomeTeam(): Promise<IleaderboardInfos[]>
  listAwayTeam(): Promise<IleaderboardInfos[]>
}

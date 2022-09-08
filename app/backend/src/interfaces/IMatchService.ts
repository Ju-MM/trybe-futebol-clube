export interface IMatchInfos {
  homeTeam: string,
  awayTeam: string,
  homeTeamGoals: number,
  awayTeamGoals: number,
  inProgress: true, // posso fazer assim?
}

export interface IMatchService<Match> {
  list(inProgress?: boolean): Promise<Match[] | undefined>
  create(matchInfos: IMatchInfos): Promise<object>
}

export interface IMatchInfos {
  homeTeam: string,
  awayTeam: string,
  homeTeamGoals: number,
  awayTeamGoals: number,
  inProgress?: boolean,
}

export interface IMatchService<Match> {
  list(inProgress?: boolean): Promise<Match[] | undefined>
  validateBody({ homeTeam, awayTeam }: any): Promise<void >
  create(matchInfos: IMatchInfos): Promise<object>
  update(id: number): Promise<void>
}

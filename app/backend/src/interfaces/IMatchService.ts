export interface IMatchService<Match> {
  list(inProgress?: boolean): Promise<Match[] | undefined>
}

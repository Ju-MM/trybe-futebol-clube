export interface IMatchService<Match> {
  list(): Promise<Match[]>
}

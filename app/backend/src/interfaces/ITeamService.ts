export interface ITeamService<Team> {
  list(): Promise<Team[]>
}

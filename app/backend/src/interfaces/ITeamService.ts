// export interface ITeam {
//   id: number,
//   teamName: string,
// }

export interface ITeamService<Team> {
  list(): Promise<Team[]>
  getTeam(id: number): Promise<Team | null>
}

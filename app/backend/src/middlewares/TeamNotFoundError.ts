export default class TeamNotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'TeamNotFoundError';
  }
}

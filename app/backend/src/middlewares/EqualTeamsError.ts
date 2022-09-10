export default class EqualTeamsError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'EqualTeamsError';
  }
}

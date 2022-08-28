export interface IUser {
  email: string,
  password: string,
}

export interface IService<User> {
  list(): Promise<User[]>
  login(userInfo: IUser): Promise<string | null>
}

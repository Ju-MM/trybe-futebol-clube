export interface IUser {
  email: string,
  password: string,
}

export interface IService<User> extends IUser {
  list(): Promise<User[]>
  login(userInfo: IUser): Promise<string | null>
}

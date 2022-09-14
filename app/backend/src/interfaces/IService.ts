export interface IUser {
  email: string,
  password: string,
}

export interface IService<User> {
  list(): Promise<User[]>
  login(userInfo: IUser): Promise<string | null>
}

export interface CreateUserResponse {
  id: number,
  role: string,
  email: string,
  token: string
}

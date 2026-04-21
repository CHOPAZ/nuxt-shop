import type { IUser } from './user.interface'

export interface IAuthResponce {
  token: string
  user: IUser
}

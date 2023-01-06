import { Roles } from './roles';

export interface IUser {
  username: string,
  telegramId: number,
  timeZone: string,
  role: Roles,
  birthday?: Date,
}

export interface IAdmin extends Omit<IUser, 'birthday'> {
}

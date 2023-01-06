import { Roles } from './roles';

export interface IUser {
  username: string,
  telegramId: number,
  timeZone: string,
  role: Roles,
}

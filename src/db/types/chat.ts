import { IUser } from './user';

export interface IChat {
  chatId: number,
  chatLanguage: string,
  usersAmount: number,
  users: IUser[];
  admins: IUser[];
}

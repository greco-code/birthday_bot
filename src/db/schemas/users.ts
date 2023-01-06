import * as mongoose from 'mongoose';
import { IUser } from '../types/user';

const UserSchema = new mongoose.Schema<IUser>({
  username: String,
  telegramId: String,
  timeZone: String,
  role: String,
});

export default UserSchema;

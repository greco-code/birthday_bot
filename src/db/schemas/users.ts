import * as mongoose from 'mongoose';
import { IUser } from '../types/user';

const UserSchema = new mongoose.Schema<IUser>({
  username: String,
  telegramId: String,
  timeZone: String,
  role: String,
  birthday: Date,
});

export default UserSchema;

import * as mongoose from 'mongoose';
import { IBirthday } from '../types/birthday';
import UserSchema from './users';

const BirthdaySchema = new mongoose.Schema<IBirthday>({
  user: [UserSchema],
  birthday: Date,
});

export default BirthdaySchema;

import * as mongoose from 'mongoose';
import { IChat } from '../types/chat';
import UserSchema from './users';

const ChatSchema = new mongoose.Schema<IChat>({
  chatId: Number,
  chatLanguage: String,
  usersAmount: Number,
  users: [UserSchema],
  admins: [UserSchema],
});

export default ChatSchema;

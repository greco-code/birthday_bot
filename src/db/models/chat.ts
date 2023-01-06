import * as mongoose from 'mongoose';
import { IChat } from '../types/chat';
import ChatSchema from '../schemas/chat';

const Chat = mongoose.model<IChat>('chat', ChatSchema);

export default Chat;

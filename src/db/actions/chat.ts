import Chat from '../models/chat';
import { IChat } from '../types/chat';
import { IUser } from '../types/user';

export const addChat = async (chat: IChat) => {
  await new Chat({
    ...chat,
  }).save();
};

export const addUserToChat = async (user: IUser, id: number) => {
  console.log(Chat, 'chat');
  await Chat.updateOne({ chatId: id }, {
    $push: { users: user },
    $inc: { usersAmount: 1 },
  });
};

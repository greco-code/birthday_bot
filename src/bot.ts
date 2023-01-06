import TelegramBot from 'node-telegram-bot-api';
import { getReply, GREETING_TEXT } from './constants/texts';
import { removeWordFromString } from './utils/utils';
import { COMMANDS } from './utils/comands';
import { addBirthday } from './db/actions/birthday';
import { IAdmin, IUser } from './db/types/user';
import { Roles } from './db/types/roles';
import { IChat } from './db/types/chat';
import { addChat, addUserToChat } from './db/actions/chat';
import { Timezones } from './constants/timezones';
import { Languages } from './constants/languages';

const telegramToken = process.env.TELEGRAM_PRIVATE_KEY;

const bot = telegramToken && new TelegramBot(telegramToken, { polling: true });

if (bot) {
  bot.on('message', (msg) => {
    console.log(msg);
  });

  bot.onText(COMMANDS.start, async (msg) => {
    const chatId = msg?.chat?.id;
    const chatLanguage = Languages.Ru;
    const usersAmount = 0;
    const username = msg?.from?.username;
    const userId = msg?.from?.id;

    try {
      if (chatId && username && userId) {
        const adminUser: IAdmin = {
          username,
          telegramId: userId,
          timeZone: Timezones.EuropeMoscow,
          role: Roles.superAdmin,
        };

        const chat: IChat = {
          chatId,
          chatLanguage,
          usersAmount,
          users: [],
          admins: [adminUser],
        };

        await addChat(chat);
        await bot.sendMessage(chatId, GREETING_TEXT);
      }
    } catch (e) {
      console.error('Error on /start', e);
    }
  });

  bot.onText(COMMANDS.add, async (msg) => {
    const chatId = msg?.chat?.id;
    const username = msg?.from?.username;
    const userId = msg?.from?.id;
    const userText = msg?.text;

    if (chatId && username && userText && userId) {
      const user: IUser = {
        username,
        telegramId: userId,
        timeZone: 'shit',
        role: Roles.user,
      };
      const birthday = new Date();

      try {
        await addBirthday(user, birthday);
        await addUserToChat(user, chatId);
        await bot.sendMessage(chatId, getReply(username, removeWordFromString(userText, COMMANDS.add)));
      } catch (e) {
        console.log('Error adding a birthday', e);
      }
    }
  });
}

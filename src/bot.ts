import TelegramBot from 'node-telegram-bot-api';

const telegramToken = process.env.TELEGRAM_PRIVATE_KEY;

const bot = telegramToken && new TelegramBot(telegramToken, { polling: true });

console.log(bot);

if (bot) {
  bot.on('message', (msg) => {
    console.log(msg);
  });
}

export const GREETING_TEXT = 'Привет! Я ботик, который будет напоминать о Днях Рождения в этом чатике :-)' +
    '\nДля этого каждый нужно вызвать меня командой /add и в этом же сообщении написать дату вашего Дня Рождения в формате ДД/ММ/ГГГГ';

export const getReply = (username: string, date: string): string => {
  console.log(date, 'date');
  return `Привет ${username}, твой ДР ${date}, я обязательно запомню!)`;
};

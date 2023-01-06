import Birthday from '../models/birthday';
import { IUser } from '../types/user';

export const addBirthday = async (user: IUser, birthday: Date) => {
  await new Birthday({
    user,
    birthday,
  }).save();
};

export const getAllBirthdays = async () => {
  // @ts-ignore
  Birthday.find({}, (error, birthdays) => {
    console.log(birthdays, 'days');
    console.log(error, 'error');
    const birthdaysMap = {};

    // @ts-ignore
    birthdays.forEach((birthday) => {
      // @ts-ignore
      birthdaysMap[birthday._id] = birthday;
    });

    return birthdaysMap;
  });
};

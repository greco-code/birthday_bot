import * as mongoose from 'mongoose';
import { IBirthday } from '../types/birthday';
import BirthdaySchema from '../schemas/birthday';

const Birthday = mongoose.model<IBirthday>('birthday', BirthdaySchema);

export default Birthday;

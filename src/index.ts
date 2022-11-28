import express from 'express';
import * as mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(express.json());

const mongoLogin = process.env.MONGO_LOGIN;
const mongoPassword = process.env.MONGO_PASSWORD;
const port = process.env.PORT || 3000;
const mongoUri = `mongodb+srv://${mongoLogin}:${mongoPassword}@cluster0.0bia7fa.mongodb.net/?retryWrites=true&w=majority`;

const connectDatabase = async () => {
  try {
    await mongoose.connect(mongoUri, {});
    console.log('Connected to MongoDB');
  } catch (e) {
    console.log('Error connecting to mongoDB', e);
    process.exit(1);
  }
};

connectDatabase();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


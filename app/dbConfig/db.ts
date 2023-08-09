import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1/books');

const url = process.env.DATABASE_URL as string;
let connection: typeof mongoose;

const startDB = async () => {
  if (!connection) connection = await mongoose.connect(url);
  return connection;
};

export default startDB;

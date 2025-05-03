import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

const dbUrl = process.env.DB_URL as string

const dbConnect = async () => {
  try {
    const DB_OPTIONS = {
      dbName: "notes"
    }
    console.log('Connecting to DB');
    await mongoose.connect(dbUrl, DB_OPTIONS)
    console.log('Connected Successfully...')
  } catch (error) {
    console.log(error);
  }
};

export default dbConnect;



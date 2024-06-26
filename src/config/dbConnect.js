import mongoose, { mongo } from "mongoose";
import "dotenv/config";

async function connectDataBase() {
  mongoose.connect(process.env.DB_CONNECTION_STRING);

  return mongoose.connection;
}

export default connectDataBase;

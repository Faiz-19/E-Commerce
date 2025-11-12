import mongoose from "mongoose";
import { DB_NAME } from "../../constant.js";

export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log("DB Connection Successful!", connectionInstance.connection.host);
  } catch (error) {
    console.error("DB Connection Failed!", error);
  }
};

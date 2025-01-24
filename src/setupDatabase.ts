import mongoose from "mongoose";
import { config } from "./config";

const { DATABASE_URL } = config;

const connectToDatabase = (): void => {
  const connect = async () => {
    try {
      console.log("Attempting to connect to the database...");
      await mongoose.connect(DATABASE_URL!, {});
      console.log("Successfully connected to the database.");
    } catch (error) {
      console.error("Error connecting to the database:", error);
      process.exit(1); // Exit process if initial connection fails
    }
  };

  // Call connect function to establish the initial connection
  connect();

  // Reconnect on disconnection
  mongoose.connection.on("disconnected", () => {
    console.log("Database disconnected. Attempting to reconnect...");
    connect();
  });

  // Optional: Handle errors
  mongoose.connection.on("error", (error) => {
    console.error("Database connection error:", error);
  });
};

export default connectToDatabase;

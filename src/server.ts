import app from "./app";
import { connectDB } from "./config/database";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};

startServer();

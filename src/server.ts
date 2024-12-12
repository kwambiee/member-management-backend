import app from "./app";
import { connectDB } from "./config/database";
import dotenv from "dotenv";
import { seedRoles } from "./seed";
dotenv.config();

const PORT = process.env.PORT;

const startServer = async () => {
  await connectDB();

  await seedRoles();

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};

startServer();

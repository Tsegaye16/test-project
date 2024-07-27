import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app";

// Load environment variables
dotenv.config({ path: ".env" });

// Connect to the database
mongoose
  .connect(
    process.env.DATABASE_LOCAL as string,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as mongoose.ConnectOptions
  )
  .then(() => console.log("DB connection successful!"));

// Start the server
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err: Error) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import cors from "cors";
const router = require("./routes/songRout");

interface CustomRequest extends Request {
  requestTime?: string;
}

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Middleware for logging
app.use(morgan("dev"));

// Middleware to add request time to each request
app.use((req: CustomRequest, res: Response, next: NextFunction) => {
  req.requestTime = new Date().toISOString();
  next();
});

// Enable CORS
app.use(cors());

// Routes
app.use("/songs", router);

// Error handling middleware
app.use((err: any, req: CustomRequest, res: Response, next: NextFunction) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

export default app;

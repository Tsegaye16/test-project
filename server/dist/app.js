"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const router = require("./routes/songRout");
const app = (0, express_1.default)();
// Middleware to parse JSON
app.use(express_1.default.json());
// Middleware for logging
app.use((0, morgan_1.default)("dev"));
// Middleware to add request time to each request
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});
// Enable CORS
app.use((0, cors_1.default)());
// Routes
app.use("/songs", router);
// Error handling middleware
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    });
});
exports.default = app;

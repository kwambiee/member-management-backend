"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
const errorMiddleware = (err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    const status = err.status || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({
        error: message,
        details: err.stack,
    });
};
exports.errorMiddleware = errorMiddleware;

// convert error to API error
import * as express from 'express';

export const errorMiddleware = (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
    ) => {
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

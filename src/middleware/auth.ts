import  Passport  from "passport";

import { Request, Response, NextFunction, RequestHandler } from "express";


// export const authenticate = (): RequestHandler => {
//   return async (req: Request, res: Response, next: NextFunction) => {
//     return new Promise<void>((resolve, reject) => {
//       Passport.authenticate(
//         "jwt",
//         { session: false },
//         verifyCallback(req, resolve, reject)
//       )(req, res, next);
//       // if err

//     });
//   };
// };

export const authenticate = (): RequestHandler => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await new Promise<void>((resolve, reject) => {
        Passport.authenticate(
          "jwt",
          { session: false },
        //   verifyCallback(req, resolve, reject)
        )(req, res, next);
      });
      next();
    } catch (err: any) {
      res
        .status(401)
        .json({ error: "Authentication failed", message: err.message });
    }
  };
};
const verifyCallback = (
  req: Request,
  resolve: (value?: void | PromiseLike<void>) => void,
  reject: (reason?: any) => void
) => {
  return (err: any, user: any, info: any) => {
    if (err) {
      return reject(err);
    }
    if (!user) {
      return reject(new Error("No user found"));
    }
    req.user = user;
    resolve();
  };
};
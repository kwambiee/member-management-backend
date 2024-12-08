"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const passport_1 = __importDefault(require("passport"));
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
const authenticate = () => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield new Promise((resolve, reject) => {
                passport_1.default.authenticate("jwt", { session: false })(req, res, next);
            });
            next();
        }
        catch (err) {
            res
                .status(401)
                .json({ error: "Authentication failed", message: err.message });
        }
    });
};
exports.authenticate = authenticate;
const verifyCallback = (req, resolve, reject) => {
    return (err, user, info) => {
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

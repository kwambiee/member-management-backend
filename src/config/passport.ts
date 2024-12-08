import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import dotenv from "dotenv";
import User from "../models/user.model";

dotenv.config();

type JwtOptions = {
  jwtFromRequest: (req: Request) => string | null;
  secretOrKey: string;
};

const jwt_options: JwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET!,
};

const jwtVerify = async (payload: any, done: any) => {
    try {
        const user = await User.findByPk(payload.sub);
        if (!user) {
            return done(null, false);
        }
        done(null, user);
    } catch (error) {
        done(error, false);
    }
};

console.log("Registering JWT Strategy...");
passport.use("jwt", new JwtStrategy(jwt_options, jwtVerify));
console.log("JWT Strategy registered.");



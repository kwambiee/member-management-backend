import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  getUserByEmail,
} from "../services/user.service";

import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

type UserType = {
  email: string;
  password: string;
  username: string;
  roleId: number;
};

type LoginType = {
  email: string;
  password: string;
};

export const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body as LoginType;
    const user = await getUserByEmail(email);
    console.log(user, "user")
    if (!user) {
      throw new Error("User not found");
    }
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error("Invalid password");
    }
    const token = jwt.sign({ sub: user.id }, process.env.JWT_SECRET as string);
    res.status(200).json({ token });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const createUserController = async (req: Request, res: Response) => {
  try {
    const user = await createUser(req.body as UserType);
    if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in environment variables");
}
    const token = jwt.sign({ sub: user.id }, process.env.JWT_SECRET as string);
    res.status(201).json({user, token});
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getUsersController = async (req: Request, res: Response) => {
  try {
    const users = await getUsers();
    res.status(200).json(users);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getUserByIdController = async (req: Request, res: Response) => {
  try {
    const user = await getUserById(req.params.id);
    res.status(200).json(user);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const updateUserController = async (req: Request, res: Response) => {
  try {
    const user = await updateUser(req.params.id, req.body as UserType);
    res.status(200).json(user);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteUserController = async (req: Request, res: Response) => {
  try {
    const user = await deleteUser(req.params.id);
    res.status(200).json(user);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

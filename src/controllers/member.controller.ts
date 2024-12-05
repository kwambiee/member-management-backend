import { Request, Response } from "express";
import {
  createMember,
  getMembers,
  getMemberById,
  updateMember,
  deleteMember,
} from "../services/member.service";

type MemberType = {
  firstName: string;
  lastName: string;
  profilePicture: string;
  dateOfBirth: Date;
  phone: string;
  userId: string;
};

export const createMemberController = async (req: Request, res: Response) => {
  try {
    const member = await createMember(req.body as MemberType);
    res.status(201).json(member);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getMembersController = async (req: Request, res: Response) => {
  try {
    const members = await getMembers();
    res.status(200).json(members);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getMemberByIdController = async (req: Request, res: Response) => {
  try {
    const member = await getMemberById(req.params.id);
    res.status(200).json(member);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const updateMemberController = async (req: Request, res: Response) => {
  try {
    const member = await updateMember(req.params.id, req.body as MemberType);
    res.status(200).json(member);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteMemberController = async (req: Request, res: Response) => {
  try {
    const member = await deleteMember(req.params.id);
    res.status(200).json(member);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};



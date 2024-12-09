import { Request, Response } from "express";
import {
  createMember,
  getMembers,
  getMemberById,
  updateMember,
  deleteMember,
} from "../services/member.service";
import {createActivityLog} from "../services/activity_log.service";

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
    await createActivityLog({action: "create", description: `${member.firstName} ${member.lastName} created`});
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
    await updateMember(req.params.id, req.body as MemberType);
    const member = await getMemberById(req.params.id);
    await createActivityLog({action: "create", description: `${member?.firstName} ${member?.lastName} created`});
    res.status(200).json(member);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteMemberController = async (req: Request, res: Response) => {
  try {
    const member = await getMemberById(req.params.id);
    await deleteMember(req.params.id);
    await createActivityLog({action: "delete", description: `${member?.firstName} ${member?.lastName} deleted`});
    res.status(200).json(member);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};



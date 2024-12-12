import { getRoles, deleteRole } from "../services/role.service";

import { Request, Response } from "express";

export const getRolesController = async (req: Request, res: Response) => {
  try {
    const roles = await getRoles();
    res.status(200).json(roles);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteRoleController = async (req: Request, res: Response) => {
  try {
    const role = await deleteRole(Number(req.params.id));
    res.status(200).json(role);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

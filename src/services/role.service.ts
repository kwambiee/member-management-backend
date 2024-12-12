import Role from "../models/role.model";

type RoleType = {
  roleName: "Admin" | "User" | "Member";
  id?: string;
};

export const getRoles = async () => {
  return await Role.findAll();
};

export const deleteRole = async (id: number) => {
  return await Role.destroy({ where: { id } });
};

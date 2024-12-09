import Role from "../models/role.model"

type RoleType = {
    roleName: "admin" | "user";
    id?: number
}

export const createRole = async (roleData: RoleType) => {
  if (!roleData.roleName) {
    throw new Error("roleName is required");
  }
  return await Role.create(roleData as RoleType);
};

export const getRoles = async () => {
  return await Role.findAll();
};

export const deleteRole = async (id: number) => {
  return await Role.destroy({ where: { id } });
}

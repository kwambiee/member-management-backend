import User from "../models/user.model";

type UserType = {
  email: string;
  password: string;
  username: string;
  roleId: string;
  hasProfile: boolean;
};

export const getUserByEmail = async (email: string) => {
  return await User.findOne({
    where: {
      email,
    },
  });
};

export const createUser = async (userData: UserType) => {
  if (!userData.email || !userData.password) {
    throw new Error("email and password are required");
  }
  return await User.create(userData as UserType);
};

export const getUsers = async () => {
  return await User.findAll();
};

export const getUserById = async (id: string) => {
  return await User.findByPk(id);
};

export const updateUser = async (id: string, userData: any) => {
  return await User.update(userData, {
    where: {
      id,
    },
  });
};

export const deleteUser = async (id: string) => {
  return await User.destroy({
    where: {
      id,
    },
  });
};

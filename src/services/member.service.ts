import Member from "../models/member.model";

type MemberType = {
  firstName: string;
  lastName: string;
  profilePicture: string;
  dateOfBirth: Date;
  phone: string;
  roleId: string;
  userId: string;
};

export const createMember = async (memberData: MemberType) => {
  if (!memberData.firstName || !memberData.lastName || !memberData.userId || !memberData.roleId) {
    throw new Error("firstname, lastname and userId are required");
  }
  return await Member.create(memberData as MemberType);
}

export const getMembers = async () => {
  return await Member.findAll();
}

export const getMemberById = async (id: string) => {
  return await Member.findByPk(id);
}

export const getMemberByUserId = async (userId: string) => {
  return await Member.findOne({
    where: {
      userId
    }
  })
}

export const updateMember = async (id: string, memberData: MemberType) => {
  return await Member.update(memberData, {
    where: {
      id
    }
  })
}

export const deleteMember = async (id: string) => {
  return await Member.destroy({
    where: {
      id
    }
  })
}




import Role from "./models/role.model";

export async function seedRoles() {
  const roles = ["Admin", "Member"];

  for (const roleName of roles) {
    const [_, created] = await Role.findOrCreate({
      where: { roleName: roleName },
    });

    if (created) {
      console.log(`Role ${roleName} created`);
    } else {
      console.log(`Role ${roleName} already exists`);
    }
  }
}

// I want to create a seed function that will create users, it only requires username, email

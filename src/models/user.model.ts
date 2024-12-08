import { profile } from "console";
import uniqid from "uniqid";
import { Sequelize } from "@sequelize/core";
import {
  Table,
  Attribute,
  PrimaryKey,
  AutoIncrement,
  NotNull,
  Default,
  BelongsTo,
  BeforeCreate,
  BeforeUpdate,
} from "@sequelize/core/decorators-legacy";

import bcrypt from "bcrypt";



import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  type CreationOptional,
} from "@sequelize/core";
import { sequelize } from "../config/database";
import Role from "./role.model"

@Table({
  tableName: "users",
  timestamps: true,
})
export class User extends Model<
  InferAttributes<User>,
  InferCreationAttributes<User>
> {
  @PrimaryKey
  @Default(() => uniqid()) // Use a unique string generator
  @Attribute(DataTypes.STRING)
  declare id: CreationOptional<string>;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare username: string;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare email: string;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare password: string;

  // This is the association
  @BelongsTo(() => Role, "roleId")
  declare role?: Role;

  @Attribute(DataTypes.INTEGER)
  @Default(2) // Default role
  declare roleId: number; // References Role table

  // encrypt password
  @BeforeCreate
  static async hashPassword(user: User) {
    if (user.password) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
    }
  }

  // Hook to hash password before updating the user
  @BeforeUpdate
  static async hashPasswordBeforeUpdate(user: User) {
    if (user.password) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
    }
  }

  // // Method to compare passwords
  // async isValidPassword(password: string): Promise<boolean> {
  //   return bcrypt.compare(password, this.password);
  // }
}


export default User;

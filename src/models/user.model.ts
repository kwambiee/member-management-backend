import { profile } from "console";
import uniqid from "uniqid";
import { Sequelize } from "@sequelize/core";
import { v4 as uuidv4 } from "uuid";
import {
  Table,
  Attribute,
  PrimaryKey,
  AutoIncrement,
  NotNull,
  Default,
  BelongsTo,
  Unique,
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
import Role from "./role.model";

@Table({
  tableName: "users",
  timestamps: true,
})
export class User extends Model<
  InferAttributes<User>,
  InferCreationAttributes<User>
> {
  @PrimaryKey
  @Attribute(DataTypes.UUIDV4)
  @Default(() => uuidv4())
  declare id: CreationOptional<string>;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare username: string;

  @Attribute(DataTypes.STRING)
  @NotNull
  @Unique
  declare email: string;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare password: string;

  @Attribute(DataTypes.BOOLEAN)
  @Default(false)
  declare hasProfile: boolean;

  // This is the association
  @BelongsTo(() => Role, "roleId")
  declare role?: Role;

  @Attribute(DataTypes.UUIDV4)
  declare roleId: string; // References Role table

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



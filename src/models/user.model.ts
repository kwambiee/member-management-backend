import { profile } from "console";
import uniqid from "uniqid";
import {
  Table,
  Attribute,
  PrimaryKey,
  AutoIncrement,
  NotNull,
  Default,
  BelongsTo,
} from "@sequelize/core/decorators-legacy";



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
}


export default User;

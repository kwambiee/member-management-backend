import { profile } from "console";
import { v4 as uuidv4 } from "uuid";
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

@Table({
  tableName: "roles",
  timestamps: true,
})
export class Role extends Model<
  InferAttributes<Role>,
  InferCreationAttributes<Role>
> {
  @PrimaryKey
  @Attribute(DataTypes.UUIDV4)
  @Default(() => uuidv4())
  declare id: CreationOptional<string>;

  @Attribute(DataTypes.ENUM("Admin", "User", "Member"))
  @Default("User") // Default role
  declare roleName: "Admin" | "User" | "Member";
}

export default Role;

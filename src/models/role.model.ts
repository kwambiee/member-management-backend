import { profile } from "console";
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
  @Attribute(DataTypes.INTEGER)
  declare id: CreationOptional<number>;

  @Attribute(DataTypes.ENUM("admin", "user"))
  @Default("user") // Default role
  declare roleName: "admin" | "user";

}


export default Role;

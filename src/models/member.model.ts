import {
  Attribute,
  Table,
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

import User from "./user.model"

@Table({
  tableName: "members",
  timestamps: true,
})
export class Member extends Model<
  InferAttributes<Member>,
  InferCreationAttributes<Member>
> {
  @PrimaryKey
  @Attribute(DataTypes.INTEGER)
  declare id: CreationOptional<number>;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare firstName: string;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare lastName: string;

  @Attribute(DataTypes.STRING)
  declare profilePicture: string | null;

  @Attribute(DataTypes.DATE)
  @NotNull
  declare dateOfBirth: Date;

  @Attribute(DataTypes.STRING)
  declare phone: string;

  @Attribute(DataTypes.STRING)
  declare roleId: string;

  // This is the association
  @BelongsTo(() => User, "userId")
  declare user?: User;

  @Attribute(DataTypes.STRING)
  declare userId: string; 
  
}

export default Member;

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

import User from "./user.model";
import Member from "./member.model";

@Table({
  tableName: "activity_logs",
  timestamps: true,
})
export class ActivityLogs extends Model<
  InferAttributes<ActivityLogs>,
  InferCreationAttributes<ActivityLogs>
> {
  @PrimaryKey
  @Attribute(DataTypes.INTEGER)
  declare id: CreationOptional<number>;


  @Attribute(DataTypes.STRING)
  @NotNull
  declare action: string;

  @Attribute(DataTypes.STRING)
  declare userId: string;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare description: string;

//   // This is the association
//   @BelongsTo(() => User, "userId")
//   declare user: User;

//   @Attribute(DataTypes.INTEGER)
//   declare userId: string; // References user table

  // This is the association
  // @BelongsTo(() => Member, "memberId")
  // declare member?: Member;

  // @Attribute(DataTypes.INTEGER)
  // declare memberId: number; // References Role table

}

export default ActivityLogs;

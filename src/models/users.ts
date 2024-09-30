import sequelize, { DataTypes } from "../db";

const User = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },

    name: { type: DataTypes.TEXT, allowNull: true },
  },
  { timestamps: false }
);
export default User;

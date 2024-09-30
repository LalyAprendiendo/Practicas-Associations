import sequelize, { DataTypes } from "../db";

const Teacher = sequelize.define(
  "teacher",
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
export default Teacher;

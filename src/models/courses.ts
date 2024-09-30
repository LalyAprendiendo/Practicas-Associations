import sequelize, { DataTypes } from "../db";

const Course = sequelize.define(
  "course",
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
export default Course;

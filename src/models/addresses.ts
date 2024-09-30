import sequelize, { DataTypes } from "../db";

const Addresses = sequelize.define(
  "addresses",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },

    street: { type: DataTypes.TEXT, allowNull: true },
  },
  { timestamps: false }
);
export default Addresses;

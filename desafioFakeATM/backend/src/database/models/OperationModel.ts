import { DataTypes } from "sequelize/dist";
import { db } from "../db";

export const OperationModel = db.define("operation", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  value: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  origin: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  recipient: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

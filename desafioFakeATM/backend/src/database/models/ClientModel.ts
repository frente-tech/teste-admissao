import { DataTypes } from "sequelize/dist";
import { db } from "../db";

export const ClientModel = db.define("client", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dateBorn: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  limit: {
    type: DataTypes.DECIMAL,
    allowNull: true,
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

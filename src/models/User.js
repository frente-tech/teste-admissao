/* eslint-disable max-lines-per-function */
/* eslint-disable strict */

'use strict';

const {
  encryptString,
  decryptString,
  hashPassword,
} = require('../utils/crypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: { type: DataTypes.STRING, allowNull: false },
      address: { type: DataTypes.STRING, allowNull: false },
      birthdate: { type: DataTypes.DATEONLY, allowNull: false },
      cpf: { type: DataTypes.STRING, allowNull: false, unique: true },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
        // hash password when write
        set(val) {
          this.setDataValue(
            'password',
            encryptString(val, process.env.CRYPT_SECRET),
          );
        },
        // decrypt password when read
        get() {
          return decryptString(
            this.getDataValue('password'),
            process.env.CRYPT_SECRET,
          );
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      role: {
        allowNull: false,
        type: DataTypes.ENUM,
        values: ['user', 'admin'],
        defaultValue: 'user',
      },
    },
    {
      timestamps: true,
      tableName: 'Users',
      updatedAt: false,
      underscored: true,
      paranoid: true,
      hooks: {
        // needed update hash after an update change

        beforeUpdate: hashPassword,
      },
      scopes: {
        withoutPassword: {
          attributes: { exclude: ['password'] },
        },
      },
    },
  );

  User.associate = (models) => {
    User.hasMany(models.Operation, {
      foreignKey: 'clientId',
      as: 'operations',
    });
  };

  return User;
};

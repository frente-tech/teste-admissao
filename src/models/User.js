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
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      birthdate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      cpf: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
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
        unique: true,
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM,
        values: ['user', 'admin'],
        defaultValue: 'user',
        allowNull: false,
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

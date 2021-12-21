/* eslint-disable max-lines-per-function */
const { encryptString, decryptString } = require('../utils/crypt');

function hashPassword(user) {
  if (!user.changed('password')) {
    return null;
  }
  user.setDataValue(
    'password',
    encryptString(user.password, process.env.CRYPT_SECRET),
  );
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      birthdate: DataTypes.STRING,
      cpf: DataTypes.STRING,
      password: {
        type: DataTypes.STRING,
        get() {
          return decryptString(
            this.getDataValue('password'),
            process.env.CRYPT_SECRET,
          );
        },
      },
      email: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'Users',
      underscored: true,
      hooks: {
        beforeCreate: hashPassword,
        beforeUpdate: hashPassword,
      },
    },
  );

  return User;
};

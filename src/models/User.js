module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    birthdate: DataTypes.STRING,
    cpf: DataTypes.STRING,
  }, { timestamps: false, tableName: 'Users', underscored: true });

  return User;
};

/* eslint-disable max-lines-per-function */
/* eslint-disable strict */

'use strict';

module.exports = (sequelize, DataTypes) => {
  const Operation = sequelize.define(
    'Operation',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      value: { type: DataTypes.INTEGER, allowNull: false },
      billPreference: {
        type: DataTypes.ENUM,
        values: ['10', '50', '100'],
        defaultValue: '100',
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM,
        values: ['open', 'provisioned', 'ready'],
        defaultValue: 'open',
        allowNull: false,
      },
    },
    {
      timestamps: true,
      updatedAt: false,
      tableName: 'Operations',
      underscored: true,
    },
  );

  Operation.associate = (models) => {
    Operation.belongsTo(models.User, {
      foreignKey: 'clientId',
      as: 'client',
    });
  };

  return Operation;
};

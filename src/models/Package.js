/* eslint-disable max-lines-per-function */
/* eslint-disable strict */

'use strict';

module.exports = (sequelize, DataTypes) => {
  const Package = sequelize.define(
    'Package',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      billType: {
        type: DataTypes.ENUM,
        values: ['10', '50', '100'],
        allowNull: false,
      },
      billQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM,
        values: ['open', 'closed'],
        defaultValue: 'open',
        allowNull: false,
      },
      closedAt: {
        type: DataTypes.DATE,
      },
    },
    {
      timestamps: true,
      tableName: 'Packages',
      updatedAt: false,
      underscored: true,
    },
  );

  return Package;
};

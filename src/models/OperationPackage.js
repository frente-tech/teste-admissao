/* eslint-disable max-lines-per-function */
/* eslint-disable strict */

'use strict';

module.exports = (sequelize, DataTypes) => {
  const OperationPackage = sequelize.define(
    'OperationPackage',
    {
      quantity: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      timestamps: false,
      tableName: 'Operation_Package',
      underscored: true,
    },
  );

  OperationPackage.associate = (models) => {
    models.Package.belongsToMany(models.Operation, {
      as: 'operations',
      through: OperationPackage,
      foreignKey: 'packageId',
      otherKey: 'operationId',
    });

    models.Operation.belongsToMany(models.Package, {
      as: 'packages',
      foreignKey: 'operationId',
      through: OperationPackage,
      otherKey: 'packageId',
    });
  };

  return OperationPackage;
};

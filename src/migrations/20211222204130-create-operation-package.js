'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable(
        'Operation_Package',
        {
          operationId: {
            allowNull: false,
            field: 'operation_id',
            type: Sequelize.DataTypes.UUID,
            references: {
              model: 'Operations',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
            primaryKey: true,
          },
          packageId: {
            allowNull: false,
            field: 'package_id',
            type: Sequelize.DataTypes.UUID,
            references: {
              model: 'Packages',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
            primaryKey: true,
          },
          quantity: {
            allowNull: false,
            type: Sequelize.DataTypes.INTEGER,
          },
        },
        { transaction }
      );
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.dropTable('Operation_Package', { transaction });
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
};

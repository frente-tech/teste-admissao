'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable(
        'Packages',
        {
          id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
          },
          billType: {
            field: 'bill_type',
            allowNull: false,
            type: Sequelize.DataTypes.ENUM,
            values: ['10', '50', '100'],
          },
          billQuantity: {
            field: 'bill_quantity',
            allowNull: false,
            type: Sequelize.DataTypes.INTEGER,
          },
          status: {
            allowNull: false,
            type: Sequelize.DataTypes.ENUM,
            values: ['open', 'closed'],
            defaultValue: 'open',
          },
          closedAt: {
            field: 'closed_at',
            type: Sequelize.DataTypes.DATE,
          },
          createdAt: {
            field: 'created_at',
            allowNull: false,
            type: Sequelize.DataTypes.DATE,
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
      await queryInterface.dropTable('Packages', { transaction });
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
};

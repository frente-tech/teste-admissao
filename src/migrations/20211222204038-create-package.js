'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable(
        'Packages',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
          },
          billType: {
            type: Sequelize.DataTypes.ENUM,
            values: ['10', '50', '100'],
            allowNull: false,
            field: 'bill_type',
          },
          billQuantity: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
            field: 'bill_quantity',
          },
          status: {
            type: Sequelize.DataTypes.ENUM,
            values: ['open', 'closed'],
            defaultValue: 'open',
            allowNull: false,
          },
          closedAt: {
            type: Sequelize.DataTypes.DATE,
            field: 'closed_at',
          },
          createdAt: {
            type: Sequelize.DataTypes.DATE,
            field: 'created_at',
            allowNull: false,
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

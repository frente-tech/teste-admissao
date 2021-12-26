'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable(
        'Operations',
        {
          id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
          },
          clientId: {
            type: Sequelize.DataTypes.UUID,
            field: 'client_id',
            allowNull: false,
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
            references: {
              model: 'Users',
              key: 'id',
            },
          },
          value: {
            allowNull: false,
            type: Sequelize.DataTypes.INTEGER
          },
          billPreference: {
            field: 'bill_preference',
            allowNull: false,
            type: Sequelize.DataTypes.ENUM,
            values: ['10', '50', '100'],
            defaultValue: '100',
          },
          status: {
            allowNull: false,
            type: Sequelize.DataTypes.ENUM,
            values: ['open', 'provisioned', 'ready'],
            defaultValue: 'open',
          },
          createdAt: {
            field: 'created_at',
            allowNull: false,
            type: Sequelize.DataTypes.DATE
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
      await queryInterface.dropTable('Operations', { transaction });
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
};

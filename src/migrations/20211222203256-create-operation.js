'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable(
        'Operations',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
          },
          clientId: {
            type: Sequelize.DataTypes.UUID,
            allowNull: false,
            field: 'client_id',
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
            references: {
              model: 'Users',
              key: 'id',
            },
          },
          value: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
          },
          billPreference: {
            type: Sequelize.DataTypes.ENUM,
            values: ['10', '50', '100'],
            defaultValue: '100',
            allowNull: false,
            field: 'bill_preference',
          },
          status: {
            type: Sequelize.DataTypes.ENUM,
            values: ['open', 'provisioning', 'ready'],
            defaultValue: 'open',
            allowNull: false,
          },
          createdAt: {
            type: Sequelize.DataTypes.DATE,
            allowNull: false,
            field: 'created_at',
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

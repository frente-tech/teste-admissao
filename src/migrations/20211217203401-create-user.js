'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable(
        'Users',
        {
          id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
          },
          name: {
            allowNull: false,
            type: Sequelize.STRING,
          },
          address: {
            allowNull: false,
            type: Sequelize.STRING,
          },
          birthdate: {
            allowNull: false,
            type: Sequelize.DATEONLY,
          },
          cpf: {
            allowNull: false,
            unique: true,
            type: Sequelize.STRING,
          },
          createdAt: {
            field: 'created_at',
            allowNull: false,
            type: Sequelize.DataTypes.DATE,
            defaultValue: Sequelize.DataTypes.NOW,
          },
          deletedAt: {
            field: 'deleted_at',
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
      await queryInterface.dropTable('Users', { transaction });
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
};

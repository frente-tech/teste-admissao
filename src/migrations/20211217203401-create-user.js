'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable(
        'Users',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
          },
          name: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          address: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          birthdate: {
            type: Sequelize.DATEONLY,
            allowNull: false,
          },
          cpf: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false,
          },
          createdAt: {
            type: Sequelize.DataTypes.DATE,
            defaultValue: Sequelize.DataTypes.NOW,
            allowNull: false,
            field: 'created_at',
          },
          deletedAt: {
            type: Sequelize.DataTypes.DATE,
            field: 'deleted_at',
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

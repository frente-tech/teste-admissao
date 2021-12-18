module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.addColumn(
        'Users',
        'role',
        {
          type: Sequelize.DataTypes.STRING,
        },
        { transaction }
      );
      await queryInterface.addColumn(
        'Users',
        'email',
        {
          type: Sequelize.DataTypes.STRING,
        },
        { transaction }
      );
      await queryInterface.addColumn(
        'Users',
        'password',
        {
          type: Sequelize.DataTypes.STRING,
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
      await queryInterface.removeColumn('Users', 'role', { transaction });
      await queryInterface.removeColumn('Users', 'email', { transaction });
      await queryInterface.removeColumn('Users', 'password', { transaction });
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
};

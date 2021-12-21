'use strict';

const { encryptString } = require("../utils/crypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.bulkInsert('Users',[{
        name: 'admin',
        cpf: '37319268817',
        address: 'Alameda Frente Corretora, 1, São Paulo',
        birthdate: '1991-09-24',
        email: 'admin@pkg.frente.com.br',
        password: encryptString('@dmin', process.env.CRYPT_SECRET),
        role: 'admin',
      }], { transaction });
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
  }
};

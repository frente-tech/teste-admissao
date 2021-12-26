'use strict';

const { encryptString } = require("../utils/crypt");

const ADMIN_SEED_UUIDV4 = '1dc070d5-b863-470f-8f2f-773cdc68b42a';

module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.bulkInsert('Users',[{
        id: ADMIN_SEED_UUIDV4,
        name: 'Administrador',
        cpf: '12345678910',
        address: 'Alameda Frente Corretora, 1, São Paulo',
        birthdate: '2021-12-25',
        email: 'admin@pkg.frente.com.br',
        password: encryptString('@dmin', process.env.CRYPT_SECRET),
        role: 'admin',
        created_at: new Date(),
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
      await queryInterface.bulkDelete('Users', { id: ADMIN_SEED_UUIDV4 }, { transaction });
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  }
};

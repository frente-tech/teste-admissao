'use strict';

const { encryptString } = require("../utils/crypt");

const USER_SEED_UUIDV4 = 'ed8a24dd-d282-423d-b023-15f0733ba538';

module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.bulkInsert('Users',[{
        id: USER_SEED_UUIDV4,
        name: 'Usuario Teste',
        cpf: '00000000000',
        address: 'Alameda Santos, 1, São Paulo',
        birthdate: '2021-12-25',
        email: 'teste@pkg.frente.com.br',
        password: encryptString('teste', process.env.CRYPT_SECRET),
        role: 'user',
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
      await queryInterface.bulkDelete('Users', { id: USER_SEED_UUIDV4 }, { transaction });
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
  USER_SEED_UUIDV4,
};

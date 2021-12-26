'use strict';

const { encryptString } = require("../utils/crypt");
const { USER_SEED_UUIDV4 } = require("./20211222231943-users");

const OPERATION_SEED_UUIDV4 = 'c1db8bae-071e-4af2-8cf9-b676c5f48ee5';

module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.bulkInsert('Operations',[{
        id: OPERATION_SEED_UUIDV4,
        client_id: USER_SEED_UUIDV4,
        value: 3500,
        bill_preference: '50',
        status: 'provisioning',
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
      await queryInterface.bulkDelete('Operations', { id: OPERATION_SEED_UUIDV4 }, { transaction });
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
  OPERATION_SEED_UUIDV4,
};

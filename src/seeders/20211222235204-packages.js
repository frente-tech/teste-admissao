'use strict';

const { encryptString } = require("../utils/crypt");

const PACKAGE_ONE_SEED_UUIDV4 = '7a761463-e8d9-426f-81b0-b5d09fe68a6e';
const PACKAGE_TWO_SEED_UUIDV4 = 'fa932b4d-f372-4ba5-bb39-6826a93ecc62';

module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.bulkInsert('Packages',[{
        id: PACKAGE_ONE_SEED_UUIDV4,
        bill_type: '50',
        status: 'closed',
        bill_quantity: 50,
        closed_at: new Date(),
        created_at: new Date(),
      },{
        id: PACKAGE_TWO_SEED_UUIDV4,
        bill_type: '50',
        status: 'open',
        bill_quantity: 20,
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
      await queryInterface.bulkDelete('Packages', { id: PACKAGE_ONE_SEED_UUIDV4 }, { transaction });
      await queryInterface.bulkDelete('Packages', { id: PACKAGE_TWO_SEED_UUIDV4 }, { transaction });
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
  PACKAGE_ONE_SEED_UUIDV4,
  PACKAGE_TWO_SEED_UUIDV4,
};

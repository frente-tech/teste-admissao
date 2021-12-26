'use strict';

const { encryptString } = require('../utils/crypt');
const { OPERATION_SEED_UUIDV4 } = require('./20211222235157-operations');
const { PACKAGE_ONE_SEED_UUIDV4, PACKAGE_TWO_SEED_UUIDV4 } = require('./20211222235204-packages');

module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.bulkInsert(
        'Operation_Package',
        [
          { operation_id: OPERATION_SEED_UUIDV4, package_id: PACKAGE_ONE_SEED_UUIDV4, quantity: 50 },
          { operation_id: OPERATION_SEED_UUIDV4, package_id: PACKAGE_TWO_SEED_UUIDV4, quantity: 20 },
        ],
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
      await queryInterface.bulkDelete('Operation_Package', { operation_id: OPERATION_SEED_UUIDV4, package_id: PACKAGE_ONE_SEED_UUIDV4 }, { transaction });
      await queryInterface.bulkDelete('Operation_Package', { operation_id: OPERATION_SEED_UUIDV4, package_id: PACKAGE_TWO_SEED_UUIDV4 }, { transaction });
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
};

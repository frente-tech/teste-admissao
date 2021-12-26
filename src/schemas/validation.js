const Ajv = require('ajv');

const loginSchema = require('./login.json');

const ajv = new Ajv({ allErrors: true });
require('ajv-formats')(ajv);
require('ajv-errors')(ajv);

ajv.addSchema(loginSchema, 'login');

module.exports = ajv;

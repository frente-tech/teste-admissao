const StringCrypto = require('string-crypto');

const options = {
  salt: process.env.SALT_KEY,
  iterations: 10,
  digest: 'sha512',
};

const { encryptString, decryptString } = new StringCrypto(options);

module.exports = {
  encryptString,
  decryptString,
};

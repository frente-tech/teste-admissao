const StringCrypto = require('string-crypto');

const OPTIONS = {
  salt: process.env.SALT_KEY,
  iterations: 10,
  digest: 'sha512',
};

const { encryptString, decryptString } = new StringCrypto(OPTIONS);
function hashPassword(user) {
  if (!user.changed('password')) {
    return null;
  }
  user.setDataValue(
    'password',
    encryptString(user?.password, process.env.CRYPT_SECRET),
  );
}

module.exports = {
  encryptString,
  hashPassword,
  decryptString,
};

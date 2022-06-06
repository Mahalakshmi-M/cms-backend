const axios = require('axios');
const bcrypt = require('bcrypt');
const User = require('../models/user');


exports.create = async (data) => {
  const hashPassword = (password) => bcrypt.hash(password, 10);
  const password = await hashPassword(data.password)
    .then((hash) => (hash ))
    .catch((err) => `Error hashing password: ${ err }`);
  data.password = password;
  return User.query().insert(data);
};

exports.findOne = async (query) => {
  const results = await User.query().where(query);
  if (!Array.isArray(results)) return results;
  return results[0];
}

exports.verify = async (username, password) => {
  const verifyPassword = (password, hash) => bcrypt.compare(password, hash);
  const matchErrorMsg = 'Username or password do not match'
    knex.select()
      .from('users')
      .where({ username })
      .timeout(guts.timeout)
      .then((user) => {
        if (!user) throw matchErrorMsg;

        return user;
      })
      .then((user) => Promise.all([user, verifyPassword(password, user.password)]))
      .then(([user, isMatch]) => {
        if (!isMatch) throw matchErrorMsg;
        return user;
      });
};

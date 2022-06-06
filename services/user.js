const axios = require('axios');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const knex = require('../knex');



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
  const matchErrorMsg = 'Username or password do not match'
  const user = await this.findOne({username: username});
  if(!user){
    throw matchErrorMsg;
  }else {
    const verifyPassword = (password, hash) => bcrypt.compare(password, hash);
    const isMatch = await verifyPassword(password, user.password);
    if (!isMatch) throw matchErrorMsg;
    return user;
  }
};

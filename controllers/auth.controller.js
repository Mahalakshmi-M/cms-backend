'use strict'

const UserService = require('../services/user');
const jwt = require('jsonwebtoken');

const {
  createError,
  BAD_REQUEST,
  UNAUTHORIZED,
  CONFLICT
} = require('../utils/error_helper')

const postLogin = (req, res, next) => {
  const username = String(req.body.username);
  const password = String(req.body.password);

  if (!username || !password) next(createError({
    status: BAD_REQUEST,
    message: '`username` + `password` are required fields'
  }))
  const accessToken = jwt.sign({ user: req.body }, process.env.JWT_SECRET);

  UserService.verify(username, password)
    .then(user => 
      res.json({
      ok: true,
      message: 'Login successful',
      token: accessToken,
      user
    }))
    .catch(err => next(createError({
      status: UNAUTHORIZED,
      message: err
    })))
}

const postRegister = async (req, res, next) => {
  UserService.findOne({username: req.body.username}).then(user => {
    if (user) return next(createError({
      status: CONFLICT,
      message: 'Username already exists'
    }));
    return UserService.create(req.body);
  })
  .then(user => res.json({
    ok: true,
    message: 'Registration successful',
    user
  }))
  .catch(next);
}

module.exports = {
  postLogin,
  postRegister
}

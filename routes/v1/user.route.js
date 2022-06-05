const express = require('express');
const router = express.Router();
const { authorize } = require('../../middlewares/auth');

const {
  postUsers,
  getUsers,
  getUser,
  putUser,
  deleteUser
} = require('../../controllers/user.controller')

router.route('/users')
  //.authorize()
  .post(postUsers)
  .get(getUsers)

router.route('/users/:id')
  //.authorize()
  .get(getUser)
  .put(putUser)
  .delete(deleteUser)

module.exports = router;

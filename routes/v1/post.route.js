const express = require('express');
const router = express.Router();
const { authorize } = require('../../middlewares/auth');

const {
  postPosts,
  getPosts,
  getPost,
  putPost,
  deletePost
} = require('../../controllers/user.controller');

router.route('/')
  .authorize()
  .post(postPosts)
  .get(getPosts);

router.route('/:id')
  .authorize()
  .get(getPost)
  .put(putPost)
  .delete(deletePost);

module.exports = router;

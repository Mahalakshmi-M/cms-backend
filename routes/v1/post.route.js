const express = require('express');
const router = express.Router();
const {authorize}  = require('../../middlewares/auth');

const {
  postPosts,
  getPosts,
  getPost,
  putPost,
  deletePost
} = require('../../controllers/post.controller');

router.route('/')
  .post(authorize(), postPosts)
  .get(authorize(), getPosts);

router.route('/:id')
  .get(authorize(), getPost)
  .put(authorize(), putPost)
  .delete(authorize(), deletePost);

module.exports = router;

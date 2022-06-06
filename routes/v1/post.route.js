const express = require('express');
const router = express.Router();
const {authorize}  = require('../../middlewares/auth');
const extractFile = require("../../middlewares/file");


const {
  postPosts,
  getPosts,
  getPost,
  putPost,
  deletePost
} = require('../../controllers/post.controller');

router.route('/')
  .post(authorize(), extractFile, postPosts)
  .get(authorize(), getPosts);

router.route('/:id')
  .get(authorize(), getPost)
  .put(authorize(), putPost)
  .delete(authorize(), deletePost);

module.exports = router;

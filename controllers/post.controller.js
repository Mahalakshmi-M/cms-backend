'use strict'

const PostService = require('../services/post');

const postPosts = (req, res, next) => {
  const props = req.body;
  const url = req.protocol + "://" + req.get("host");
  req.body.image_url = url + "/images/" + req.file.filename; 
  req.body.user_id = req.user[0].id;
  PostService.create(props)
    .then(post => res.json({
      ok: true,
      message: 'Post created',
      post
    }))
    .catch(next)
}

const getPosts = (req, res, next) => {
  PostService.findAll()
    .then(posts => res.json({
      ok: true,
      message: 'Posts found',
      posts
    }))
    .catch(next)
}

const getPost = (req, res, next) => {
  const postId = req.params.id;
  PostService.findById(postId)
    .then(post => res.json({
      ok: true,
      message: 'Post found',
      post
    }))
    .catch(next)
}

const putPost = (req, res, next) => {
  const postId = req.params.id;
  const props = req.body;
  let image_url = req.body.image_url;
  if (req.file) {
    const url = req.protocol + "://" + req.get("host");
    image_url = url + "/images/" + req.file.filename;
  }
  PostService.update(postId, props)
    .then(post => res.json({
      ok: true,
      message: 'Post updated',
      post
    }))
    .catch(next)
}

const deletePost = (req, res, next) => {
  const postId = req.params.id

  PostService.destroy(postId)
    .then(deleteCount => res.json({
      ok: true,
      message: `Post '${ postId }' deleted`,
      deleteCount
    }))
    .catch(next)
}

module.exports = {
  postPosts,
  getPosts,
  getPost,
  putPost,
  deletePost
}

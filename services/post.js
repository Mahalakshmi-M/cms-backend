const axios = require('axios');
const Post = require('../models/post');

exports.create = async (data) => {
  return Post.query().insert(data);
};

exports.findOne = async (query) => {
  const results = await Post.query().where(query);
  if (!Array.isArray(results)) return results;
  return results[0];
}

exports.findAll = async () => {
  const posts = await Post.query();
  return posts;
}

exports.findById = async (id) => {
  const results = await Post.query().where({ id: id });
  return results;
}

exports.update = async (id, data) => {
  const results = await Post.query().patch(data).where({ id: id });
  return results;
}

exports.destroy = async (id) => {
  const result = await Post.query().findById(id).delete();
  return result;
}

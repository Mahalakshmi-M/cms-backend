const { Model } = require('objection');
const knex = require('../knex');
Model.knex(knex);

class Post extends Model {
  static get tableName() {
    return 'posts';
  }

  static get relationMappings() {
    // One way to prevent circular references
    // is to require the model classes here.
    const User = require('./user');

    return {
      posts: {
        relation: Model.BelongsToOneRelation,
        // The related model. This can be either a Model subclass constructor or an
        // absolute file path to a module that exports one.
        modelClass: User,
        join: {
          from: 'posts.user_id',
          to: 'users.id',
        },
      },
    };
  }
}

module.exports = Post;

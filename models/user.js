const { Model } = require('objection');
const knex = require('../knex');
Model.knex(knex);

class User extends Model {
  static get tableName() {
    return 'users';
  }

  static get relationMappings() {
    // One way to prevent circular references
    // is to require the model classes here.
    const Post = require('./post');

    return {
      posts: {
        relation: Model.HasManyRelation,
        // The related model. This can be either a Model subclass constructor or an
        // absolute file path to a module that exports one.
        modelClass: Post,
        join: {
          from: 'users.id',
          to: 'posts.user_id',
        },
      },
    }
  }
}

module.exports = User;

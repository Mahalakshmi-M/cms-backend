const { Model } = require('objection');
const Knex = require('knex');
const knexConfig = require('../knexfile');

const knex = Knex(knexConfig.development);
Model.knex(knex);

class User extends Model {
  static get tableName() {
    return 'users';
  }
}

module.exports = User;

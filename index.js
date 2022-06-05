Promise = require("bluebird");
// eslint-disable-next-line import/no-extraneous-dependencies
const chalk = require("chalk");
// eslint-disable-next-line import/no-extraneous-dependencies
const logSymbols = require("log-symbols");
const app = require("./config/express");
const { port, env } = require("./config/vars");
const Knex = require('knex');
const knexConfig = require('/knexfile');
const { Model, ForeignKeyViolationError, ValidationError } = require('objection');

const success = chalk.bold.green;
const knex = Knex(knexConfig.development);

// Bind all Models to a knex instance. If you only have one database in
// your server this is all you have to do. For multi database systems, see
// the Model.bindKnex() method.
Model.knex(knex);
app.listen(port, () => {
    console.log(success(`${logSymbols.success} App is running at http://localhost:${port} in ${env} mode.`));
    console.log('Press CTRL-C to stop\n');
});
  /**
 * Exports express
 * @public
 */
module.exports = app;

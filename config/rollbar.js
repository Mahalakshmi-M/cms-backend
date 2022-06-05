const Rollbar = require('rollbar');
const { env, rollbarEnvironment, rollbarAccessToken } = require('./vars');

const rollbar = new Rollbar({
    environment: rollbarEnvironment,
    accessToken: rollbarAccessToken,
    captureUncaught: (env === 'development') ? false : true,
    captureUnhandledRejections: (env === 'development') ? false : true
});

module.exports = rollbar;

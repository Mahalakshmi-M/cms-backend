const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const passport = require('passport');
const strategies = require('./passport');
const routes = require('../routes/v1');
const error = require('../middlewares/error');
const rollbar = require('./rollbar');
const { logs } = require('./vars');
const rawBodyBuffer = (req, res, buf, encoding) => {
    if (buf && buf.length) {
        req.rawBody = buf.toString(encoding || 'utf8');
    }
};

/**
* Express instance
* @public
*/
const app = express();

// request logging. dev: console | production: file
app.use(morgan(logs));

// parse body params and attach them to req.body
app.use(bodyParser.json({ limit: '50mb', verify: rawBodyBuffer }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, verify: rawBodyBuffer }));

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// enable authentication
app.use(passport.initialize());
passport.use('jwt', strategies.jwt);

// API v1 routes
app.use('/v1', routes);

// if error is not an instanceOf APIError, convert it.
app.use(error.converter);

// catch 404 and forward to error handler
app.use(error.notFound);

// error handler, send stacktrace only during development
app.use(error.handler);

// rollbar error handler to send exceptions to your rollbar account
app.use(rollbar.errorHandler());

module.exports = app;

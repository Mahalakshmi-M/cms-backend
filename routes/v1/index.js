const router = require('express').Router();
const userRoutes = require('./user.route');
const authRoutes = require('./auth.route');

/**
 * User routes
 */
router.use('/user', userRoutes);
router.use('/auth', authRoutes);

module.exports = router;

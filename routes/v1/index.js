const router = require('express').Router();
const userRoutes = require('./user.route');
const authRoutes = require('./auth.route');
const postRoutes = require('./post.route');

/**
 * User routes
 */
router.use('/user', userRoutes);
router.use('/auth', authRoutes);
router.use('/post', postRoutes);

module.exports = router;

const router = require('express').Router();

const auth = require('./api/auth');
const posts = require('./api/posts');
const profile = require('./api/profile');
const users = require('./api/users');

router.use('/api/auth', auth);
router.use('/api/posts', posts);
router.use('/api/profile', profile);
router.use('/api/users', users);

module.exports = router;

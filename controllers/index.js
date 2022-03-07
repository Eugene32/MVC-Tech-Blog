const router = require('express').Router();

const loginRoutes = require('./login');
const homeRoutes = require('./home');

router.use('/', homeRoutes);
router.use('/login', loginRoutes);

module.exports = router;
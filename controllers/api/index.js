const router = require('express').Router();

const loginRoutes = require('../login');
const homeRoutes = require('..');

router.use('/', homeRoutes);
router.use('/login', loginRoutes);

module.exports = router;
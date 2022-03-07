const router = require('express').Router();

const loginRoutes = require('./home-routes');

router.use('/home', loginRoutes);

module.exports = router;

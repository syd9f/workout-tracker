const router = require('express').Router();
const homeRoutes = require('./homeRoutes.js');
const api = require('./api');

router.use('/api', api);
router.use('/', homeRoutes);

module.exports = router;

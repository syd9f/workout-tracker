const router = require('express').Router();

const userRoutes = require('./userRoutes.js');
const scheduleRoutes = require('./scheduleRoutes.js');

router.use('/users', userRoutes);
router.use('/schedule', scheduleRoutes);

module.exports = router;

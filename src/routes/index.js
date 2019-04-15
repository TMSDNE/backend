const router = require('express').Router();
const apiController = require('../controllers/apiController');
const usersRouter = require('./users');
const authRouter = require('./auth');
// & use router.use to mount them

router.use('/users', usersRouter);
router.use('/auth', authRouter);

router.route('/').get(apiController.mainRoute);

module.exports = router;

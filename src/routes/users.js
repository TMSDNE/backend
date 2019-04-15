const router = require('express').Router();
const usersController = require('../controllers/usersController');
// import the other routers
// & use router.use to mount them

router.route('/').get(usersController.mainRoute);

module.exports = router;

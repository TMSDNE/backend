const router = require('express').Router();
const authController = require('../controllers/authController');
// import the other routers
// & use router.use to mount them

router.route('/').get(authController.mainRoute);

module.exports = router;

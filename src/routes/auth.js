const router = require('express').Router();
const authController = require('../controllers/authController');
// import the other routers
// & use router.use to mount them

router.route('/login').post(authController.loginUser);
router.route('/register').post(authController.registerUser);

module.exports = router;

const router = require('express').Router();
const usersController = require('../controllers/usersController');
const authenticate = require('../middleware/authenticate');
const { redisMiddleware } = require('../middleware/redisMiddleware');

router.route('/profile').get(authenticate, redisMiddleware, usersController.getProfile);
router.route('/profile/update').put(authenticate, usersController.updateProfile);
router.route('/profile/delete').delete(authenticate, usersController.deleteProfile);

module.exports = router;

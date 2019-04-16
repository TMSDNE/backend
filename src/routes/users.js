const router = require('express').Router();
const usersController = require('../controllers/usersController');
const authenticate = require('../middleware/authenticate');

router.route('/profile').get(authenticate, usersController.getProfile);
router.route('/profile/update').put(authenticate, usersController.updateProfile);
router.route('/profile/delete').delete(authenticate, usersController.deleteProfile);

module.exports = router;

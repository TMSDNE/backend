const routes = require('express').Router();
const apiController = require('../controllers/apiController');
// import the other routers
// & use router.use to mount them

router.route('/').get(apiController.mainRoute);

module.exports = router;

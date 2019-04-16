const router = require('express').Router();
const articleController = require('../controllers/articleController');
const authenticate = require('../middleware/authenticate');

router.route('/').post(authenticate, articleController.makeArticle);

module.exports = router;

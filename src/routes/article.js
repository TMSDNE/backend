const router = require('express').Router();
const articleController = require('../controllers/articleController');
const authenticate = require('../middleware/authenticate');
const cache = require('../middleware/redisMiddleware');

router.route('/').post(authenticate, cache, articleController.makeArticle);

module.exports = router;

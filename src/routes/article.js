const router = require('express').Router();
const articleController = require('../controllers/articleController');
const cache = require('../middleware/redisMiddleware');

router.route('/').post(cache, articleController.makeArticle);

module.exports = router;

const router = require('express').Router();
const articleController = require('../controllers/articleController');
const { redisMiddleware } = require('../middleware/redisMiddleware');

router.route('/').post(redisMiddleware, articleController.makeArticle);

module.exports = router;

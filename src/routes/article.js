const router = require('express').Router();
const articleController = require('../controllers/articleController');
// import the other routers
// & use router.use to mount them

router.route('/').post(articleController.makeArticle);

module.exports = router;

module.exports = {
  makeArticle
};

const axios = require('axios');
const DS_API_URL = '';
const redis = require('../middleware/redisMiddleware');

async function makeArticle(req, res) {
  const { timestamp } = req.body;
  if(!timestamp) return await res.status(500).json({ message: "Error. Couldn't retrieve articles" });
  // await axios({
  //   method: 'post',
  //   url: DS_API_URL,
  //   data: {
  //     timestamp: req.body.timestamp
  //   }
  // })
  // .then(response => {
  //   if(response === 0) return await res.status(500).json({ message: 'No article' });
  //   const article = {
  //     successful: response.successful,
  //     commentary: response.commentary,
  //     graph_url: response.graph_url
  //   }
  //   return res.status(200).json(article);
  // });

  const article = {
    successful: true,
    commentary:
      'Economy exchange traded funds prices fiat holder volatile market maturities finance index funds interest rate. Improve 401k fall bonds municipal yield called. Corporation notes capital NYSE hedge fund bondholders taxpayer. Market index bull federal. Fall Nikkei debt credit appeal.',
    img: 'https://picsum.photos/400?random',
    graph_url: 'https://www.google.com/'
  };
  redis.setex(`${timestamp}`, 3600, JSON.stringify(article));
  res.status(200).json(JSON.parse(article));
}

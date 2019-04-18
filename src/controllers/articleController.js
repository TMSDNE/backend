module.exports = {
  makeArticle
};

const axios = require('axios');
const DS_API_URL = '';
const { client } = require('../middleware/redisMiddleware');
const Articles = require('../database/helpers/articles');

async function makeArticle(req, res) {
  const { timestamp } = req.body;
  const { user_id } = req.headers;

  if(!timestamp) return await res.status(500).json({ message: "Error. Couldn't retrieve articles" });
  const searchedArticle = await Articles.getArticleByTimestamp(timestamp);
  if(!searchedArticle) {
  // await axios({
  //   method: 'post',
  //   url: DS_API_URL,
  //   data: {
  //     timestamp: req.body.timestamp
  //   }
  // })
  // .then(async response => {
  //   if(response === 0) return await res.status(500).json({ message: 'No article' });
  //   const article = {
  //     successful: response.successful,
  //     commentary: response.commentary,
  //     graph_url: response.graph_url
  //   }
  //   return article;
  // })
  // .then(async response => {
  //   if(user_id) {
  //     await Articles.addArticle(response, user_id);
  //   }
  //   return res.status(200).json(response);
  // });
  } else {
    await client.set(`${timestamp}`, JSON.stringify(searchedArticle));
    await res.status(200).json(JSON.parse(client.get(`${timestamp}`)));
  }

  const article = {
    successful: true,
    commentary:
      'Economy exchange traded funds prices fiat holder volatile market maturities finance index funds interest rate. Improve 401k fall bonds municipal yield called. Corporation notes capital NYSE hedge fund bondholders taxpayer. Market index bull federal. Fall Nikkei debt credit appeal.',
    img: 'https://picsum.photos/400?random',
    graph_url: 'https://www.google.com/'
  };
  await client.set(`${timestamp}`, JSON.stringify(article));
  await res.status(200).json(article);
}

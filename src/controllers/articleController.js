module.exports = {
  makeArticle
};

require('dotenv').config();
const axios = require('axios');
const DS_API_URL = process.env.DS_API_URL || 'localhost:8080/api';
const { client } = require('../middleware/redisMiddleware');
const Articles = require('../database/helpers/articles');

async function makeArticle(req, res) {
  const { timestamp } = req.body;
  const { user_id } = req.headers;

  try {
    if(!timestamp) return await res.status(500).json({ message: "Error. Couldn't retrieve articles" });
    const searchedArticle = await Articles.getArticleByTimestamp(timestamp);
    if(!searchedArticle) {
      await axios({
        method: 'post',
        url: DS_API_URL,
        data: {
          date: req.body.timestamp
        }
      })
      .then(async response => {
        if(response === 0 || !response.data.successful) return await res.status(500).json({ message: 'No article' });

        const article = {
          successful: response.data.successful,
          commentary: response.data.results.commentary,
          graph_url: response.data.results.graph_url,
          date: response.data.results.date
        }
        return article;
      })
      .then(async response => {
        if(user_id) {
          await Articles.addArticle(response, user_id);
        }
        await client.set(`${timestamp}`, JSON.stringify(response));
      });
    } else {
      await client.set(`${timestamp}`, JSON.stringify(searchedArticle));
    }

    await client.get(`${timestamp}`, async (err, article) => {
      if(err) throw err;
      await res.status(200).json(JSON.parse(article));
    });
  } catch(err) {
    console.log(err);
    await res.status(500).json({ message: 'Cannot get an article!' });
  }
}

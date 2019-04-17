module.exports = {
    truncate,
    getArticleById,
    getArticlesByUserId
};
const db = require('../dbConfig');

async function truncate() {
    return await db('articles').truncate();
}

async function addArticle(article, user_id) {
  return await db('articles')
  .insert({...article, user_id})
  .then(response => {
    return {
        id: response[0]
    }
  })
}

async function getArticleById(id) {
  return await db('articles')
  .select('*')
  .where({id})
  .first()
}

async function getArticlesByUserId(user_id) {
  return await db('articles')
  .select('**')
  .where({user_id})
}
module.exports = {
  getProfile,
  updateProfile,
  deleteProfile,
  getProfileArticles,
  getProfileSingleArticle
};

const Users = require('../database/helpers/users');
const Articles = require('../database/helpers/articles');
require('dotenv').config();

async function getProfile(req, res) {
  try {
    const userID = req.decoded.subject;
    const user = await Users.getUserById(userID);
    return await res.status(200).json({
      id: user.id,
      username: user.username
    });
  } catch(err) {
    return await res.status(404).json({ message: 'User profile not found!' });
  }
}

async function updateProfile(req, res) {
  const { username, password } = req.body;
  if(!username || !password) return await res.status(400).json({ message: 'User data not found!' });
  try {
    const userID = req.decoded.subject;
    const user = await Users.getUserById(userID);
    const result = await Users.updateUser(userID, {...user, username, password});
    if(result === 0) throw err;
    return await res.status(200).json({message: 'User profile updated!'});
  } catch(err) {
    return await res.status(404).json({ message: 'User profile not found!' });
  }
}

async function deleteProfile(req, res) {
  try {
    const userID = req.decoded.subject;
    const user = await Users.getUserById(userID);
    const result = await Users.deleteUser(userID);
    if(user === 0 || result === 0) throw err;
    return await res.status(200).json({message: 'User successfully deleted!'});
  } catch(err) {
    return await res.status(404).json({ message: 'User not found!' });
  }
}

async function getProfileArticles(req, res) {
  try {
    const userID = req.decoded.subject;
    const user = await Users.getUserById(userID);
    const result = await Articles.getArticlesByUserId(userID);
    if(user === 0) throw err;
    return await res.status(200).json({articles: result});
  } catch(err) {
    return await res.status(404).json({ message: 'User not found!' });
  }
}

async function getProfileSingleArticle(req, res) {
  try {
    const userID = req.decoded.subject;
    const user = await Users.getUserById(userID);
    if(user === 0) throw err;

    const { article_id } = req.body;
    const result = await Articles.getArticleById(article_id);
    if(result === 0) res.status(404).json({ message: 'Article not found!' });

    return await res.status(200).json({article: result});
  } catch(err) {
    return await res.status(404).json({ message: 'User not found!' });
  }
}
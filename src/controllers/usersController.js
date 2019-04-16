module.exports = {
  getProfile,
  updateProfile,
  deleteProfile
};

const Users = require('../database/helpers/users');
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
  await res.status(200).json({ message: 'UPDATE PROFILE OK' });
}

async function deleteProfile(req, res) {
  await res.status(200).json({ message: 'DELETE PROFILE OK' });
}

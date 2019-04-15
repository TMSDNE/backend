module.exports = {
  loginUser,
  registerUser
};

const Users = require('../database/helpers/users');

async function loginUser(req, res) {
  const { username, password } = req.body;
  if (!username || !password) {
    try {
    } catch (error) {}
  }
  return await res.status(200).json({ message: 'API OK' });
}

async function registerUser(req, res) {
  await res.status(200).json({ message: 'API OK' });
}

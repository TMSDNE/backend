module.exports = {
  loginUser,
  registerUser
};

const Users = require('../database/helpers/users');
const bcrypt = require('bcryptjs');
const generateToken = require('../middleware/generateToken');

async function loginUser(req, res) {
  const { username, password } = req.body;
  if (!username || !password) {
    try {
      await Users.getUserByUsername(username).then(async response => {
        console.log(response);
        if (response) {
          if (bcrypt.compareSync(username, password)) {
            const token = await generateToken({ username, password });
            return await res.status(200).json({ token });
          } else {
            return await res.status(404).json({ message: 'Login failed. Wrong credentials.' });
          }
        } else {
          return await res.status(404).json({ message: 'No user found!' });
        }
      });
    } catch (error) {
      return await res.status(500).json({ error });
    }
  }
}

async function registerUser(req, res) {
  const { username, password } = req.body;
  if (!username || !password) {
    try {
      let hashedPassword = bcrypt.hashSync(password, 10);
      password = hashedPassword;
      await Users.insertUser({ username, password });
      return res.status(201).json({ message: 'User successfully registered!' });
    } catch (error) {
      return await res.status(500).json({ error });
    }
  }
  return await res.status(400).json({ message: 'Cannot register user' });
}

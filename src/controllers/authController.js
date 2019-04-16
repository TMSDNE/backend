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
    return await res.status(404).json({ message: 'Login failed. Wrong credentials.' });
  }
  try {
    await Users.getUserByUsername(username).then(async user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        console.log("TOKEN:", user && bcrypt.compareSync(password, user.password));
        const token = await generateToken(user);
        console.log("TOKEN2:", user && bcrypt.compareSync(password, user.password));
        return await res.status(200).json({ token });
      } else {
        return await res.status(404).json({ message: 'No user found!' });
      }
    });
  } catch (error) {
    return await res.status(500).json({ error });
  }
}

async function registerUser(req, res) {
  let { username, password } = req.body;
  if (!username || !password) {
    return await res.status(400).json({ message: 'Cannot register user' });  
  }
  try {
    let hashedPassword = bcrypt.hashSync(password, 10);
    password = hashedPassword;
    await Users.insertUser({ username, password });
    return res.status(201).json({ message: 'User successfully registered!' });
  } catch (error) {
    return await res.status(500).json({ error });
  }  
}
module.exports = {
  loginUser,
  registerUser
};

async function loginUser(req, res) {
  await res.status(200).json({ message: 'API OK' });
}

async function registerUser(req, res) {
  await res.status(200).json({ message: 'API OK' });
}

module.exports = {
  mainRoute
};

async function mainRoute(req, res) {
  await res.status(200).json({ message: 'API OK' });
}

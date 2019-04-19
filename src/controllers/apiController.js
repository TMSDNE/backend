module.exports = {
  mainRoute
};

async function mainRoute(req, res) {
  await res.status(200).send({ message: 'API OK' });
}

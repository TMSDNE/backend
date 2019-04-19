module.exports = rootRoute;

async function rootRoute(req, res) {
  await res.status(200).send('<h1>TMSDNE API</h1>\n<p>Welcome to the This Market Summary Does Not Exist API!</p>');
}

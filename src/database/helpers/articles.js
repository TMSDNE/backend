module.exports = {
    truncate
};
const db = require('../dbConfig');

async function truncate() {
    return await db('articles').truncate();
}


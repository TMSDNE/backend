const redis = require('redis');
require('dotenv').config();

const redisPort = process.env.REDIS_PORT || 6379;
const redisHost = process.env.REDIS_HOST || '127.0.0.1';

const client = redis.createClient(redisPort, redisHost);
    client.on('connect', () => {
    console.log('Redis client connected');
});
client.on('error', (err) => {
    console.log(`Redis client error: ${err}`);
});

module.exports = (req, res, next) => {
    const { timestamp } = req.body;
    client.get(`${timestamp}`, (err, data) => {
        if (err) throw err;

        if (data != null) {
            res.status(200).json({timestamp, ...JSON.parse(data)});
        } else {
            next();
        }
    });
}
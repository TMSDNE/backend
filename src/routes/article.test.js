const request = require('supertest');
const server = require('../server');
const generateToken = require('../middleware/generateToken');
const Users = require('../database/helpers/users');

const AUTH_API_URL = '/api/auth';
const ARTICLES_API_URL = '/api/articles';

const user = {
  id: 1,
  username: 'user',
  password: 'password'
};

afterEach(async () => {
  await Users.truncate();
});

beforeEach(async () => {
  await Users.truncate();
});

async function createUser() {
  await request(server)
    .post(AUTH_API_URL + '/register')
    .send({
      username: user.username,
      password: user.password
    });
}


const article = {
    "successful": true,
    "commentary": "The S&P500 Index traded up as high as 2861.60, and as low as 2844.00, but closed flat, returning -0.00% on the day. US 10 Year Treasury yields rose to 2.49% from 2.48% today. Gold rose to 1291.90 from 1287.20. Market action in the United States was driven primarily by consumer sentiment, with the Dow Jones Industrial Average on the decline as the dollar gained traction on trade. The S&P500 index lost 2.00% today.\n\n\"We feel optimistic about our business. In the coming days and weeks we are working diligently with customers to create great sales,\" said Gary Johnson, the Republican candidate who currently sits in 11th, with a score of 83. \"Our goal has been to deliver the best sales experience on the planet, and have earned it in each and every market,\" he wrote in a blog post today.\n\nThe S&P500 climbed as high as 2891.63, and as low as 2845.04, reversing declines in the 10-year index. A week earlier, the S&P500 was on a three-year high of 3115.68, with gains of 514.00 points in the first quarter. The S&P 500 Index closed at 1604.01.\n\nThe Dow is gaining 1.01% in the 12-month period, which included a gain of 731.05 points in the third quarter of last year's low, in addition to gains of 527.50 points the past year. The S&P500 Index is down 1.30% and the S&P500 index is up 1%.\n\nBrent crude has been down for most of 2016, and in the 12-month period ended on June 30 there have been record highs for the S&P500, reaching -13.20% over this period.\n\nAs for gold, on the day the S&P500 Index fell as low as 2720 points, it has now fallen by just 1.18%. In other commodities, gold edged -1.22% against US Government bonds, after the S&P500 Index lost 2,240 points against the dollar over the quarter.\n\nThe S&P500 Index rose as high as 3100 points today.",
    "graph_url": "https://plot.ly/~TMSDNE/12",
    "date": "2019-04-02"
};

const timestamp = '2019-04-02';

describe('ARTICLES ROUTER', () => {
  describe('POST ROUTE /', () => {
    it('should return 200 on success', async () => {
      await createUser();
      const token = await generateToken(user);

      const res = await request(server)
        .post(ARTICLES_API_URL + '/')
        .set('authorization', token)
        .send({ timestamp });
      expect(res.status).toEqual(200);
    });

    it('should return an article on success', async () => {
      await createUser();
      const token = await generateToken(user);

      const res = await request(server)
        .post(ARTICLES_API_URL + '/')
        .set('authorization', token)
        .send({ timestamp });
      expect(res.body).toEqual(article);
    });

    it('should return a message on fail', async () => {
      await createUser();
      const token = await generateToken(user);

      const res = await request(server)
        .post(ARTICLES_API_URL + '/')
        .set('authorization', token);
      expect(res.body).toEqual({ message: "Error. Couldn't retrieve articles" });
    });
  });
});

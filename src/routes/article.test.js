const request = require('supertest');
const server = require('../server');

const ARTICLES_API_URL = '/api/articles';

const article = { title: 'title', text: 'text', img: 'img', category: 'category' };
const timestamp = 111145454;

describe('ARTICLES ROUTER', () => {
  describe('POST ROUTE /', () => {
    it.skip('should return 200 on success', async () => {
      const res = await request(server)
        .post(ARTICLES_API_URL + '/')
        .send({ timestamp });
      expect(res.status).toEqual(200);
    });

    it.skip('should return 404 on fail (no user found or deleted)', async () => {
      const res = await request(server)
        .post(ARTICLES_API_URL + '/')
        .send({ timestamp });
      expect(res.status).toEqual(404);
    });

    it.skip('should return an article on success', async () => {
      const res = await request(server)
        .post(ARTICLES_API_URL + '/')
        .send({ timestamp });
      expect(res.body).toEqual({ article });
    });

    it.skip('should return a message on fail', async () => {
      const res = await request(server)
        .post(ARTICLES_API_URL + '/')
        .send({ timestamp });
      expect(res.body).toEqual({ message: "Error. Couldn't retrieve articles" });
    });
  });
});

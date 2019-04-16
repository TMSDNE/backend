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
  title: 'Default title',
  text:
    'Economy exchange traded funds prices fiat holder volatile market maturities finance index funds interest rate. Improve 401k fall bonds municipal yield called. Corporation notes capital NYSE hedge fund bondholders taxpayer. Market index bull federal. Fall Nikkei debt credit appeal.',
  img: 'https://picsum.photos/400?random',
  category: 'Finance'
};

const timestamp = 111145454;

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

    it('should return 401 on fail (not authenticated)', async () => {
      const res = await request(server)
        .post(ARTICLES_API_URL + '/')
        .send({ timestamp });
      expect(res.status).toEqual(401);
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

const request = require('supertest');
const server = require('../server');
const Users = require('../database/helpers/users');

const AUTH_API_URL = '/api/auth';

const user = {
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
  return await request(server)
    .post(AUTH_API_URL + '/register')
    .send(user);
}

describe('AUTH ROUTER', () => {
  describe('POST ROUTE /LOGIN', () => {
    it('should return 200 on success', async () => {
      await createUser();
      const res = await request(server)
        .post(AUTH_API_URL + '/login')
        .send(user);
      expect(res.status).toEqual(200);
    });

    it('should return 404 on fail (no user found or deleted)', async () => {
      const res = await request(server)
        .post(AUTH_API_URL + '/login')
        .send(user);
      expect(res.status).toEqual(404);
    });

    it('should return a token on success', async () => {
      await createUser();
      const res = await request(server)
        .post(AUTH_API_URL + '/login')
        .send(user);
      expect(/^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/.test(res.body.token)).toBe(true);
    });

    it('should return a message on fail', async () => {
      const res = await request(server)
        .post(AUTH_API_URL + '/login')
        .send({ ...user, password: '' });
      expect(res.body).toEqual({ message: 'Login failed. Wrong credentials.' });
    });
  });

  describe('POST ROUTE /REGISTER', () => {
    it('should return 201 on success', async () => {
      const res = await request(server)
        .post(AUTH_API_URL + '/register')
        .send(user);
      expect(res.status).toEqual(201);
    });

    it('should return 500 on fail (user already registered)', async () => {
      await createUser();

      // const res = await request(server)
      //   .post(AUTH_API_URL + '/register')
      //   .send(user);
      const res = await createUser();
      
      expect(res.status).toEqual(500);
    });

    it('should return 400 on fail (not enough info to register an user)', async () => {
      const res = await request(server)
        .post(AUTH_API_URL + '/register')
        .send({ username: user.username, password: '' });
      expect(res.status).toEqual(400);
    });

    it('should return message on success', async () => {
      const res = await request(server)
        .post(AUTH_API_URL + '/register')
        .send(user);
      expect(res.body).toEqual({ message: 'User successfully registered!' });
    });

    it('should return message on failure (no username or password)', async () => {
      const res = await request(server)
        .post(AUTH_API_URL + '/register')
        .send({...user, password: ''});
      expect(res.body).toEqual({ message: 'Cannot register user' });
    });
  });
});

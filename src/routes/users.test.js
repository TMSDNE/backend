const request = require('supertest');
const server = require('../server');
const generateToken = require('../middleware/generateToken');
const Users = require('../database/helpers/users');

const AUTH_API_URL = '/api/auth';
const USERS_API_URL = '/api/users';

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

describe('USERS ROUTER', () => {
  describe('GET ROUTE /PROFILE', () => {
    it('should return 200 on success', async () => {
      await createUser();
      const token = await generateToken(user);
      const res = await request(server)
        .get(USERS_API_URL + '/profile')
        .set('authorization', token);

      expect(res.status).toEqual(200);
    });

    it('should return 404 on fail (no user profile found)', async () => {
      const token = await generateToken(user);
      const res = await request(server)
        .get(USERS_API_URL + '/profile')
        .set('authorization', token);
        
      expect(res.status).toEqual(404);
    });

    it('should return the user data', async () => {
      await createUser();
      const token = await generateToken(user);
      const res = await request(server)
        .get(USERS_API_URL + '/profile')
        .set('authorization', token);

      expect(res.body).toEqual({ id: user.id, username: user.username });
    });

    it('should return a message on fail', async () => {
      const token = await generateToken(user);
      const res = await request(server)
        .get(USERS_API_URL + '/profile')
        .set('authorization', token);

      expect(res.body).toEqual({ message: 'User profile not found!' });
    });
  });

  describe('PUT ROUTE /PROFILE/UPDATE', () => {
    it('should return 200 on success', async () => {
      await createUser();
      const token = await generateToken(user);
      const res = await request(server)
        .put(USERS_API_URL + '/profile/update')
        .set('authorization', token)
        .send({ ...user, username: 'updatedUser' });

      expect(res.status).toEqual(200);
    });

    it('should return 404 on fail (no user profile found)', async () => {
      const token = await generateToken(user);
      const res = await request(server)
        .put(USERS_API_URL + '/profile/update')
        .set('authorization', token)
        .send({ ...user, username: 'updatedUser' });
        
      expect(res.status).toEqual(404);
    });

    it('should return 400 on fail (no username or password)', async () => {
      await createUser();
      const token = await generateToken(user);
      const res = await request(server)
        .put(USERS_API_URL + '/profile/update')
        .set('authorization', token)
        .send({ ...user, username: '' });

      expect(res.status).toEqual(400);
    });

    it('should return a message on success', async () => {
      await createUser();
      const token = await generateToken(user);
      const res = await request(server)
        .put(USERS_API_URL + '/profile/update')
        .set('authorization', token)
        .send({ ...user, username: 'updatedUser' });

      expect(res.body).toEqual({ message: 'User profile updated!' });
    });

    it('should return a message on fail', async () => {
      const token = await generateToken(user);
      const res = await request(server)
        .put(USERS_API_URL + '/profile/update')
        .set('authorization', token)
        .send({ ...user, username: 'updatedUser' });

      expect(res.body).toEqual({ message: 'User profile not found!' });
    });
  });
  describe('DELETE ROUTE /PROFILE/DELETE', () => {
    it('should return 200 on success', async () => {
      await createUser();
      const token = await generateToken(user);
      const res = await request(server)
        .delete(USERS_API_URL + '/profile/delete')
        .set('authorization', token);

      expect(res.status).toEqual(200);
    });

    it('should return 404 on fail', async () => {
      const token = await generateToken(user);
      const res = await request(server)
        .delete(USERS_API_URL + '/profile/delete')
        .set('authorization', token);
        
      expect(res.status).toEqual(404);
    });

    it('should return a message on success', async () => {
      await createUser();
      const token = await generateToken(user);
      const res = await request(server)
        .delete(USERS_API_URL + '/profile/delete')
        .set('authorization', token);
        
      expect(res.body).toEqual({ message: 'User successfully deleted!' });
    });

    it('should return a message on failure', async () => {
      const token = await generateToken(user);
      const res = await request(server)
        .delete(USERS_API_URL + '/profile/delete')
        .set('authorization', token);
        
      expect(res.body).toEqual({ message: 'User not found!' });
    });
  });
});

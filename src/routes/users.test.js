const request = require('supertest');
const server = require('../server');

const USERS_API_URL = '/api/users';

const user = {
    id: 0,
    username: 'user',
    password: 'password'
}

describe('USERS ROUTER', () => {
  describe('GET ROUTE /PROFILE', () => {
    it('should return 200 on success', async () => {
      const res = await request(server).get(USERS_API_URL+'/profile').send({ id: 0 });
      expect(res.status).toEqual(200);
    });

    it('should return 404 on fail (no user profile found)', async () => {
        const res = await request(server).get(USERS_API_URL+'/profile').send({ id: 123 });
        expect(res.status).toEqual(404);
    });

    it('should return the user data', async () => {
        const res = await request(server).get(USERS_API_URL+'/profile').send({ id: 0 });
      expect(res.body).toEqual({ username: 'user' });
    });

    it('should return a message on fail', async () => {
        const res = await request(server).get(USERS_API_URL+'/profile').send({ id: 123 });
      expect(res.body).toEqual({ message: 'User profile not found!' });
    });
  });

  describe('PUT ROUTE /PROFILE/UPDATE', () => {
    it('should return 200', async () => {
        const res = await request(server).put(USERS_API_URL+'/profile/update').send(...user, username: 'updatedUser');
      expect(res.status).toEqual(200);
    });

    it('should return 404 (no user profile found)', async () => {
        const res = await request(server).put(USERS_API_URL+'/profile/update').send(...user, username: 'updatedUser');
      expect(res.status).toEqual(404);
    });

    it('should return a message on success', async () => {
        const res = await request(server).put(USERS_API_URL+'/profile/update').send(...user, username: 'updatedUser');
      expect(res.body).toEqual({ message: 'User profile updated!' });
    });

    it('should return a message on fail', async () => {
        const res = await request(server).put(USERS_API_URL+'/profile/update').send(...user, username: 'updatedUser');
      expect(res.body).toEqual({ message: 'User profile not found!' });
    });

  });
  describe('DELETE ROUTE /PROFILE/DELETE', () => {
    it('should return 200 on success', async () => {
        const res = await request(server).delete(USERS_API_URL+'/profile/delete').send({ id: 0 });
      expect(res.status).toEqual(200);
    });

    it('should return 404 on fail', async () => {
        const res = await request(server).delete(USERS_API_URL+'/profile/delete').send({ id: 123 });
      expect(res.status).toEqual(404);
    });

    it('should return a message on success', async () => {
        const res = await request(server).delete(USERS_API_URL+'/profile/delete').send({ id: 0 });
      expect(res.body).toEqual({ message: 'User successfully deleted!' });
    });

    it('should return a message on failure', async () => {
        const res = await request(server).delete(USERS_API_URL+'/profile/delete').send({ id: 123 });
        expect(res.body).toEqual({ message: 'User not found!' });
    });
  });
});

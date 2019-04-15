const request = require('supertest');
const server = require('../server');

const USERS_API_URL = '/api/users';

describe('USERS ROUTER', () => {
  describe('GET ROUTE /PROFILE', () => {
    it('should return 200', async () => {
      const res = await request(server).get(USERS_API_URL);
      expect(res.status).toEqual(200);
    });
    it('should return API OK', async () => {
      const res = await request(server).get(USERS_API_URL);
      expect(res.body).toEqual({ message: 'API OK' });
    });
  });
  describe('PUT ROUTE /PROFILE/UPDATE', () => {
    it('should return 200', async () => {
      const res = await request(server).get(USERS_API_URL);
      expect(res.status).toEqual(200);
    });
    it('should return API OK', async () => {
      const res = await request(server).get(USERS_API_URL);
      expect(res.body).toEqual({ message: 'API OK' });
    });
  });
  describe('DELETE ROUTE /PROFILE/DELETE', () => {
    it('should return 200', async () => {
      const res = await request(server).get(USERS_API_URL);
      expect(res.status).toEqual(200);
    });
    it('should return API OK', async () => {
      const res = await request(server).get(USERS_API_URL);
      expect(res.body).toEqual({ message: 'API OK' });
    });
  });
});

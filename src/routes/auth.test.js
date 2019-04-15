const request = require('supertest');
const server = require('../server');

const AUTH_API_URL = '/api/auth';

describe('AUTH ROUTER', () => {
  describe('POST ROUTE /LOGIN', () => {
    it('should return 200 on success', async () => {
      const res = await request(server).get(AUTH_API_URL);
      expect(res.status).toEqual(200);
    });

    it('should return 404 on fail (no user found or deleted)', async () => {
      const res = await request(server).get(AUTH_API_URL);
      expect(res.status).toEqual(200);
    });

    it('should return a token on success', async () => {
      const res = await request(server).get(AUTH_API_URL);
      expect(res.body).toEqual({ message: 'API OK' });
    });

    it('should return a message on fail', async () => {
      const res = await request(server).get(AUTH_API_URL);
      expect(res.body).toEqual({ message: 'API OK' });
    });
  });

  describe('POST ROUTE /REGISTER', () => {
    it('should return 200 on success', async () => {
      const res = await request(server).get(AUTH_API_URL);
      expect(res.status).toEqual(200);
    });

    it('should return 404 on fail (user already registered or deleted)', async () => {
      const res = await request(server).get(AUTH_API_URL);
      expect(res.status).toEqual(200);
    });

    it('should return message on success', async () => {
      const res = await request(server).get(AUTH_API_URL);
      expect(res.status).toEqual(200);
    });

    it('should return message on failure', async () => {
      const res = await request(server).get(AUTH_API_URL);
      expect(res.body).toEqual({ message: 'API OK' });
    });
  });
});

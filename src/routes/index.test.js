const request = require('supertest');
const server = require('../server');

describe('INDEX ROUTE', () => {
  it('should return 200', async () => {
    const res = await request(server).get('/api');
    expect(res.status).toEqual(200);
  });
  it('should return API OK', async () => {
    const res = await request(server).get('/api');
    expect(res.body).toEqual({ message: 'API OK' });
  });
});

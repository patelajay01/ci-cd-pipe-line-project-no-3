const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('responds with Hello message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toMatch(/Hello from CI\/CD Pipeline with Docker!/);
  });
});

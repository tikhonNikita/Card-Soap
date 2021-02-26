import request from 'supertest';
import app from '../server';

describe('Soap ', () => {
  test('It should return text with greetings', async () => {
    const response = await request(app).get('/hello');
    expect(response.text).toBe('Hello Tony Stark!');
  });

  test('It should return converted temperature', async () => {
    const response = await request(app).get('/tempconverter');
    expect(response.text).toBe('37.83333333333333');
  });

  test('It should return 404 if using unknown route', async () => {
    const response = await request(app).get('/test');
    expect(response.status).toBe(404);
  });
});

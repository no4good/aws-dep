require('dotenv').config();

const { PORT } = process.env;
const supertest = require('supertest');
const { expect } = require('chai');

const URL = `http://localhost:${PORT}/api`;
let id;
describe('Messages ', () => {
  it('CREATE a messages', async () => {
    const { body } = await supertest(URL)
      .post('/messages/')
      .send({
        email: 'fff@gmail.com',
        text: 'trav',
      })
      .set('Content-Type', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
    id = body._id;
    expect(body).to.be.an('object').and.not.empty;
  });

  it('GET Messages', async () => {
    const { body } = await supertest(URL)
      .get('/messages/list/0')
      .set('Content-Type', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
    expect(body).to.be.an('array').and.not.empty;
  });

  it('GET one message', async () => {
    const { body } = await supertest(URL)
      .get(`/messages/single/${id}`)
      .set('Content-Type', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
    expect(body).to.be.an('object').and.not.empty;
  });

  it('D one message', async () => {
    const { body } = await supertest(URL)
      .delete(`/messages/${id}`)
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(200);
  });
});

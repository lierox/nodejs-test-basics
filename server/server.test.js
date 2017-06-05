const request = require('supertest');
const expect = require('expect');
var app = require('./server.js').app;

describe('server.test', () => {
  it('/ response', (done) => {
    request(app).get('/').expect(404).expect( (res) => {
      expect(res.body).toInclude({name: 'AppName'});
    }).end(done);
  });

  it('/ things object', (done) => {
    request(app).get('/things').expect(200).expect( (res) => {
      expect(res.body).toInclude({id: 1, name: 'things1'});
    }).end(done);
  });
});

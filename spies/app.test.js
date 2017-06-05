const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('app.test', () => {
  var db = {
    save: expect.createSpy()
  };
  app.__set__('db', db);

  it('spy called', () => {
    var spy = expect.createSpy();
    spy('qq');
    expect(spy).toHaveBeenCalledWith('qq');
  });

  it('call save with user object', () => {
    var username = 'qq';
    var password = 'qqpass';

    app.signUp(username, password);
    expect(db.save).toHaveBeenCalledWith({username, password});
  });
});

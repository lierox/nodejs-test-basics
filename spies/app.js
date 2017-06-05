var db = require('./db.js');

module.exports.signUp = (username, password) => {
  db.save({username,password});
}

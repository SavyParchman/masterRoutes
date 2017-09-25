const usersCtrl = require('./usersCtrl');

module.exports = function(app) {
  app.get('/api/users/:id', usersCtrl.getById);
  app.get('/api/users', usersCtrl.getUsers);
};

const userCtrl = require('./usersCtrl');

module.exports = app => {
  app.get('/api/users', userCtrl.getUsers);
};

const adminsRoute = require('./Admins/adminsRoute'),
  usersRoute = require('./Users/usersRoute');

module.exports = app => {
  adminsRoute(app);
  usersRoute(app);
};

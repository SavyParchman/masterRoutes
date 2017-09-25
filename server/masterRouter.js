const usersRoute = require('./Users/usersRoute');
const adminsRoute = require('./Admins/adminsRoute');

module.exports = function(app) {
  usersRoute(app);
  adminsRoute(app);
};

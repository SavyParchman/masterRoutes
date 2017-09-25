const adminsCtrl = require('./adminsCtrl');

module.exports = function(app) {
  app.get('/api/admins', adminsCtrl.getAdmins);
};

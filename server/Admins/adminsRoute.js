const adminsCtrl = require('./adminsCtrl');
module.exports = app => {
  app.get('/api/admins', adminsCtrl.getAdmins);
};

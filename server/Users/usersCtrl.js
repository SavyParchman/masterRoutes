let arr = [{ id: 1, name: 'Shea' }, { id: 2, name: 'Steven' }];

module.exports = {
  getUsers(req, res) {
    const { name } = req.query;
    // var name = req.query.name;
    if (name) {
      return res.send(arr.find(c => c.name == name));
    }
    return res.send('Get Users!');
  },
  getById(req, res) {
    return res.send(arr.find(c => c.id == req.params.id));
  }
};

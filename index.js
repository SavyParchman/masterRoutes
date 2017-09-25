const express = require('express'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  port = 3000,
  app = express(),
  masterRouter = require('./server/masterRouter');

app.use(cors());
app.use(bodyParser.json());

masterRouter(app);

app.listen(port, function() {
  console.log('Server listening on port', port);
});

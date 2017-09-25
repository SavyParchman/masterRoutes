const express = require('express'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  port = 3000,
  app = express();

app.use(cors());
app.use(bodyParser.json());

app.listen(port, function() {
  console.log('Server listening on port', port);
});

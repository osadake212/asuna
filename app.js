var
  express = require('express'),
  app = express();

app.get('/', function(req, res) {
  res.send('Hello world!!');
});

// errro handling
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3000);

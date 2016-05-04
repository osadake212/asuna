var
  express = require('express'),
  routesCallback = require('./routes/callback'),
  app = express(),
  env = process.env.NODE_ENV || 'development';

app.get('/', function(req, res) {
  res.send('Hello');
});

app.post('/callback', routesCallback.callback);

// errro handling
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

if ('production' != env) {
  var
    https = require('https'),
    fs = require('fs'),
    options = {
      key: fs.readFileSync('../../key/osadake.com.key'),
      cert: fs.readFileSync('../../key/osadake.com.pem')
    };
  https.createServer(options, app).listen(3000);
} else {
  require('http').createServer(app).listen(3000);
}

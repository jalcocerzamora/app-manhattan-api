if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: __dirname + '/.env' })
}

const bodyParser  = require('body-parser');
const express     = require('express');
const http        = require('http');
const https       = require('https');
const cross       = require("cors");
const configAPI   = require('./app/config/api.config');
const configCORS  = require('./app/config/cors.config');
const configSSL = require('./app/config/ssl.config');

const app = express();
const server = (configSSL.valid ? https.createServer(configSSL.options, app) : http.createServer(app));
const middleware = require('./app/config/middleware.config')(app);
const PORT = parseInt(process.env.PORT, 10) || 8000;

server.listen(PORT, () => { console.log('Server is listening to port %d', PORT) });

app.set('private-key', configAPI.PRIVATE_KEY)
app.use(express.static(process.env.STATIC_DIR));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cross(configCORS.options));

// require('./app/websocket')(app, middleware);
require('./app/routes')(app, middleware);
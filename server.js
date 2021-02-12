// if NODE_ENV value not define then dev value will be assign 
mode = process.env.NODE_ENV || 'default';

const config      = require('config');
const pack        = require('./package');
const bodyParser  = require('body-parser');
const chalk       = require('chalk');
const swaggerUi   = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const configAPI   = require('./app/config/api.config');
const configCORS  = require('./app/config/cors.config');
const configSSL   = require('./app/config/ssl.config');

// if (process.env.NODE_ENV !== 'production') { require('dotenv').config({ path: __dirname + '/.env' }) }

const express     = require('express');
const http        = require('http');
const https       = require('https');
const cross       = require("cors");

const app = express();
const server = (configSSL.valid ? https.createServer(configSSL.options, app) : http.createServer(app));
const middleware = require('./app/config/middleware.config')(app);
// const PORT = parseInt(process.env.PORT, 10) || 8000;

const start = () => (
  // server.listen(PORT, () => { console.log('Server is listening to port %d', PORT) });
  app.listen(config.port, () => {
    console.log(chalk.yellow('.......................................'));
    console.log(chalk.green(config.name));
    console.log(chalk.green(`Port:\t\t${config.port}`));
    console.log(chalk.green(`Mode:\t\t${config.mode}`));
    console.log(chalk.green(`App version:\t${pack.version}`));
    console.log(chalk.green("database connection is established"));
    console.log(chalk.yellow('.......................................'));
  })
);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.set('private-key', config.api.PRIVATE_KEY)
// app.use(express.static(process.env.STATIC_DIR));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cross(configCORS.options));

// require('./app/websocket')(app, middleware);

require('./app/routes')(app, middleware);

start();
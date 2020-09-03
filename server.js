require('dotenv').config({ path: __dirname + '/.env' })


const { isNullOrUndefined } = require('util');

const bodyParser  = require('body-parser');
const express     = require('express');
const http        = require('http');
const https       = require('https');
const cors        = require("cors");
const ConfigAPI   = require('./app/config/api.config');
const ConfigCORS  = require('./app/config/cors.config');
const ConfigSSL   = require('./app/config/ssl.config');

const app         = express();
const server      = (!isNullOrUndefined(process.env.SSL) && process.env.SSL == 'true' ? https.createServer(ConfigSSL.options, app) : http.createServer(ConfigSSL.options, app));
const middleware  = require('./app/config/middleware.config')(app);
const io          = require('socket.io')(server);
const PORT        = parseInt(process.env.PORT, 10) || 8000;

server.listen(PORT, () => { console.log('Server is listening to port %d', PORT) });

app.set('private-key', ConfigAPI.PrivateKey)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors(ConfigCORS.options));

const deliveries = {};

// io.on('connection', (socket) => {
//   var addedUser = false;
//   console.log('a user connected', socket.id);

//   // when the client emits 'new delivery', this listens and executes
//   socket.on('new delivery', (data) => {
//     // we tell the client to execute 'new message'
//     socket.broadcast.emit('new delivery', {
//       username: socket.username,
//       message: data
//     });
//   });

  // when the client emits 'add user', this listens and executes
  // socket.on('add delivery', (username) => {
  //   if (addedUser) return;

  //   // we store the username in the socket session for this client
  //   socket.username = username;
  //   ++numUsers;
  //   addedUser = true;
  //   socket.emit('login', {
  //     numUsers: numUsers
  //   });
  //   // echo globally (all clients) that a person has connected
  //   socket.broadcast.emit('user joined', {
  //     username: socket.username,
  //     numUsers: numUsers
  //   });
  // });

  // when the client emits 'typing', we broadcast it to others
  // socket.on('typing', () => {
  //   socket.broadcast.emit('typing', {
  //     username: socket.username
  //   });
  // });

  // when the client emits 'stop typing', we broadcast it to others
  // socket.on('stop typing', () => {
  //   socket.broadcast.emit('stop typing', {
  //     username: socket.username
  //   });
  // });

//   socket.on('disconnect', () => {
//     if (addedUser) {
//       --numUsers;

//       // echo globally that this client has left
//       // socket.broadcast.emit('user left', {
//       //   username: socket.username,
//       //   numUsers: numUsers
//       // });
//     }
//     console.log('user disconnected');
//   });

//   let previousId;
//   const safeJoin = currentId => {
//     socket.leave(previousId);
//     socket.join(currentId);
//     previousId = currentId;
//   };

//   socket.on("getDelivery", deliveryID => {
//     safeJoin(deliveryID);
//     socket.emit("delivery", deliveries[deliveryID]);
//   });

//   socket.on("addDelivery", delivery => {
//     deliveries[delivery.id] = delivery;
//     safeJoin(delivery.id);
//     io.emit("deliveries", Object.keys(deliveries));
//     socket.emit("delivery", delivery);
//   });

//   socket.on("editDelivery", delivery => {
//     deliveries[delivery.id] = delivery;
//     socket.to(delivery.id).emit("delivery", delivery);
//   });

//   io.emit("deliveries", Object.keys(deliveries));
// });

require('./app/routes')(app, middleware);
const config = require('config');

module.exports = {
  options: {
      origin: function (origin, callback) {
        let isWhite = config.cors.whitelist.includes(origin);
        let isBlack = config.cors.blacklist.includes(origin);

        if(origin == undefined || isWhite){
          callback(null, true);
        } else if(origin == undefined || !isBlack){
          // callback(new Error('Not allowed by CORS: ' + origin));
          callback("NOT ALLOW BY CORS");
        }

        // if (origin && WHITELIST.indexOf(origin) !== -1) {
        //   callback(null, true)
        // } else {
        //   callback(new Error('Not allowed by CORS: ' + origin))
        // }
      },
      optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
}
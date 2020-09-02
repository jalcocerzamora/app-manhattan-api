const fs = require("fs");
const path = require('path')

const fileKEY   = path.join(__dirname, (process.env.NODE_ENV == 'development' ? '../../ssl/server.key' : '/srv/www/keys/my-site-key.pem'));
const fileCERT  = path.join(__dirname, (process.env.NODE_ENV == 'development' ? '../../ssl/server.crt' : '/srv/www/keys/chain.pem'));

module.exports = {
    options: {
        key: fs.readFileSync(fileKEY),
        cert: fs.readFileSync(fileCERT)
    }
}
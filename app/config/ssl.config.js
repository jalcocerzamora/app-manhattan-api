const config = require('config');

const fs = require("fs");
const path = require('path')

let isValid = false
let fileKEY = null
let fileCERT = null

if(config.mode == 'development') {
    if(fs.existsSync(path.join(__dirname, '../../ssl/server.key'))) {
        isValid = true
        fileKEY   = fs.readFileSync(path.join(__dirname, '../../ssl/server.key'));
        fileCERT  = fs.readFileSync(path.join(__dirname, '../../ssl/server.crt'));
    }
} else {
    if(fs.existsSync(path.join(__dirname, '/srv/www/keys/my-site-key.pem'))) {
        isValid = true
        fileKEY   = fs.readFileSync(path.join(__dirname, '/srv/www/keys/my-site-key.pem'));
        fileCERT  = fs.readFileSync(path.join(__dirname, '/srv/www/keys/chain.pem'));
    }
}

module.exports = {
    valid: isValid,
    options: {
        key: fileKEY,
        cert: fileCERT
    }
}
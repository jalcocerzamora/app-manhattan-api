const WHITELIST = [
  'chrome-extension://fhbjgbiflinjbdggehcddcbncdddomop',
  'http://localhost:8000', 
  'http://localhost:4200',

  // DEPLOY
  'https://jalcocerzamora.github.io',
  'https://jalcocerz.000webhostapp.com',
  // DEPLOY LOCAL
  'http://local.app-manhattan.com',

];

module.exports = {
  options: {
      origin: function (origin, callback) {
        if (WHITELIST.indexOf(origin) !== -1) {
          callback(null, true)
        } else {
          callback(new Error('Not allowed by CORS'))
        }
      },
      optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
}
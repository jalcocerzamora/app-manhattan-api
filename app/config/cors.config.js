const WHITELIST = [
  'chrome-extension://fhbjgbiflinjbdggehcddcbncdddomop',
  'http://localhost:8000',
  'https://localhost:8000',
  // LOCALHOST
  'http://localhost:4200',
  'https://localhost:4200',
  // DEPLOY
  'https://jalcocerzamora.github.io',
  'https://jalcocerz.000webhostapp.com',
  // DEPLOY LOCAL
  'http://local.app-manhattan.com',
  'https://local.app-manhattan.com',
];

module.exports = {
  options: {
      origin: function (origin, callback) {
        if (origin && WHITELIST.indexOf(origin) !== -1) {
          callback(null, true)
        } else {
          callback(new Error('Not allowed by CORS: ' + origin))
        }
      },
      optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
}
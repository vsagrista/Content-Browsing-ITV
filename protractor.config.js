exports.config ={
  specs:['test/**/*.js'],
  framework:'mocha',
  mochaOpts:{
    reporter:'spec',
    slow:3000,
    enableTimeouts: false
  },
  capabilities:{
    'browserName':'chrome'
  },
  directConnect: true
}
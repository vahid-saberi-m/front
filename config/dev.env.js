'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
    BASE_URL:'"http://api.balatar.inpin.co/"',
    CLIENT_SECRET:'"LfztswTcawhXhkXydwf4X0YReFcqa5jFlPVoj0eE"',
    CLIENT_ID:'2'
})

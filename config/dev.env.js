'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
    BASE_URL:'"http://api.balatar.inpin.co/"',
    CLIENT_SECRET:'"LfztswTcawhXhkXydwf4X0YReFcqa5jFlPVoj0eE"',
    CLIENT_ID:'2'
    // BASE_URL:'"http://127.0.0.1:8000"',
    // CLIENT_SECRET:'"vFBZoE1IjVmzYxCycKFeBabeT0EbiRQvQBgA9KNW"',
    // CLIENT_ID:'2'
})

/* jshint -W014, -W033, esversion: 9 */
/* eslint-disable new-cap */
'use strict'
const GoveePlatform = require('./lib/govee-platform.js')
module.exports = function (hb) {
  hb.registerPlatform('homebridge-govee', 'Govee', GoveePlatform, true)
}

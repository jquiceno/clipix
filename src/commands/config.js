'use strict'

const Configstore = require('configstore')

async function config (command, value) {
  const configuration = new Configstore('clipix', {})

  configuration.set(command, value)
}

module.exports = config

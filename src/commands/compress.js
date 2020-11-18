'use strict'

const Configstore = require('configstore')
const tinify = require('tinify')

async function compress (source) {
  try {
    const configuration = new Configstore('clipix', {})
    const key = configuration.get('tinify')
    if (!key) {
      throw new Error('Tinify key not found. Remember to use clipix config tinify <KeyValue> first')
    }
    tinify.key = key
    const file = tinify.fromFile(source)
    return file.toFile(`optimized-${source}`)
  } catch (error) {
    console.error(error.message)
  }
}

module.exports = compress

'use strict'

const logSymbols = require('log-symbols')
const fs = require('fs').promises
const Image = require('../lib/image')

module.exports = async function action (source) {
  try {
    const sourceStat = await fs.lstat(source)
    const sources = !sourceStat.isDirectory() ? [source] : await fs.readdir(source)

    const images = await Promise.all(sources.map(async file => {
      const isImage = await Image.isImage(file)

      if (!isImage) return false

      const image = new Image(file)
      const { format, width, height, _size } = await image.metadata()

      return {
        file: file,
        format,
        width,
        height,
        _size
      }
    }))

    console.table(images.filter(i => i))
  } catch (error) {
    console.error(logSymbols.error, error.message)
  }
}

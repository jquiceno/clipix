#!/usr/bin/env node

'use strict'

const { Command } = require('commander')
const logSymbols = require('log-symbols')
const { version } = require('../package.json')
const emojic = require('emojic')
const fs = require('fs').promises
const Image = require('../src/lib/image')

async function action (source) {
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

async function init () {
  const program = new Command()
  program
    .description(`Clipix, an image editor for the terminal created in NodeJs ${emojic.smiley}`)
    .version(version)

  program
    .command('info <Image/Directory>')
    .description('Get the information from an image')
    .action(action)

  program.parse(process.argv)
}

init()

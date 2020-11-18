'use strict'

const { Command } = require('commander')
const { version } = require('./package.json')
const emojic = require('emojic')

async function init () {
  const program = new Command()
  program
    .description(`Clipix, an image editor for the terminal created in NodeJs ${emojic.smiley}`)
    .version(version)

  program.parse(process.argv)
}


init ()
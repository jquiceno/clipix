#!/usr/bin/env node

'use strict'

const { Command } = require('commander')
const { version } = require('../package.json')
const emojic = require('emojic')
const compress = require('../src/commands/compress')
const config = require('../src/commands/config')
const info = require('../src/commands/info')
const updateNotifier = require('update-notifier')
const pkg = require('../package.json')

const updateCheck = updateNotifier({ pkg })

async function init () {
  const program = new Command()
  program
    .description(`Clipix, an image editor for the terminal created in NodeJs ${emojic.smiley}`)
    .version(version)

  program
    .command('info <Image/Directory>')
    .description('Get the information from an image')
    .action(info)

  program
    .command('compress <Image>')
    .description('Compress an image')
    .action(compress)

  program
    .command('config <Command> <Value>')
    .description('Save command configuration')
    .action(config)

  if (updateCheck.update) updateCheck.notify()

  program.parse(process.argv)
}

init()

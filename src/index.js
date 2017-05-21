#! /usr/bin/env node

// @flow

/* eslint-disable no-console */

import { argv } from 'yargs'
import 'colors'

import processAls from './core'

const path = argv.file || 'main.als'

if (argv.release) {
  console.log('\n========= Release Process =========\n')
  // flow-disable-next-line
  console.log(`${'Save'.green} and run ${'yarn test'.green}`)
  // flow-disable-next-line
  console.log(`${'Expand Selector track'.green} big enough to cause a linting error`)
  // flow-disable-next-line
  console.log(`Set ${'Invisible Limiter'.green} to ${'16x'.green} oversampling`)
  // flow-disable-next-line
  console.log(`Highlight Selector's ${'clip'.green}, and click ${'Export'}`)
  // flow-disable-next-line
  console.log(`Select ${'(Mix)'.green} track, 44100, 16, POW-r 3, no normalization, export as X.X.X.wav`)
  // flow-disable-next-line
  console.log(`Switch ${'Export Type'.green} effect to ${'SoundCloud'.green} mode, make the final volume ${'-0.5db'.green}, export again, as X.X.X-sc.wav`)
  // flow-disable-next-line
  console.log(`Switch ${'Export Type'.green} effect to ${'Normal'.green} mode, ${'deactivate the limiter and utilities'.green}, export again, at ${'32 bit depth with normalization'.green} as X.X.X-pure.wav`)
  // flow-disable-next-line
  console.log(`Open ${'Listening Project'.green} (don't save), load track, and listen`)
  // flow-disable-next-line
  console.log(`If it all sounds good, bump version number in ${'package.json'.green}`)
  // flow-disable-next-line
  console.log(`Run ${'git add .'.green} and ${"git commit -m 'vX.X.X'".green}`)
  // flow-disable-next-line
  console.log(`Run ${'git tag vX.X.X'.green} and ${'git push'.green} and ${'git push origin --tags'.green}`)
  // flow-disable-next-line
  console.log(`Create a ${'new release on Github'.green} and upload both exports`)
  // flow-disable-next-line
  console.log(`Copy exports to ${'Dropbox'.green}`)
} else {
  processAls(path)
}

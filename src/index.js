#! /usr/bin/env node

// @flow

/* eslint-disable no-console */

// const fs = require('fs')
// const zlib = require('zlib')
// const fsExtra = require('fs-extra')
//
// // TODO: Only version XML files, never overwrite an .als file.
// // Have a restore function that takes a versioned XML and creates the .als though.
//
// const process = (alsPath, xmlPath, xmlPath2) => {
//   const xmlString = zlib.gunzipSync(fs.readFileSync(alsPath)).toString()
//   fsExtra.outputFileSync(xmlPath, xmlString)
//
//   const stream = fs.createReadStream('sample-project.xml')
//     .pipe(zlib.createGzip())
//     .pipe(fs.createWriteStream('sample-project-2.als'))
//
//   stream.on('close', () => {
//     const newXmlString = zlib.gunzipSync(fs.readFileSync('sample-project-2.als')).toString()
//     console.log(xmlString === newXmlString ? 'match' : 'nomatch')
//   })
// }
//
// process('sample-project.als', 'sample-project.xml')

const path = process.argv[1] || 'main.als'

console.log(path)

// @flow

import fs from 'fs'
import xml2js from 'xml2js'
import zlib from 'zlib'

const processAls = (path: string) => {
  fs.readFile(path, (err1, file) => {
    zlib.gunzip(file, (err2, gzip) => {
      xml2js.parseString(gzip.toString(), (err3, abletonObj) => {
        // cleanAbleton(abletonObj)
        // linkDescendance(abletonObj)
        /* eslint-disable no-console */
        console.dir(abletonObj.Ableton.LiveSet)
        /* eslint-enable no-console */
      })
    })
  })
}

export default processAls

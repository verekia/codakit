// @flow

import _ from 'lodash'
import fs from 'fs'
import xml2js from 'xml2js'
import zlib from 'zlib'

import allRules from './rules'

const rulesArray = []
_.forOwn(allRules, (value, ruleKey) => {
  rulesArray.push({ ruleKey, func: allRules[ruleKey] })
})

const lintResults = abletonObj => rulesArray.map(rule => rule.func(abletonObj))

/* eslint-disable no-param-reassign */
const cleanPlainObjectNode = (node) => {
  // Cleaning up [0] and $
  _.forOwn(node, (el, key) => {
    if (_.isArray(el) && el.length === 1) {
      if (_.keys(el[0]).length === 1 && _.has(el[0], '$')) {
        node[key] = el[0].$
      } else {
        node[key] = el[0]
      }
    }
  })
  _.forOwn(node, (el, key) => {
    if (_.keys(el).length === 1 && _.has(el, '$')) {
      node[key] = el.$
    }
  })
}

const cleanAbleton = (node) => {
  if (_.isArray(node)) {
    node.forEach((el) => {
      cleanAbleton(el)
    })
  } else if (_.isPlainObject(node)) {
    cleanPlainObjectNode(node)
    // Traversing and creating parenthood links (needs a 2nd forOwn
    // because entries have been affected by the first forOwn)
    _.forOwn(node, (el) => {
      cleanAbleton(el)
    })
  }
}

const linkDescendance = (node, grandparentIfArray) => {
  if (_.isArray(node)) {
    node.forEach((el) => {
      linkDescendance(el, node)
    })
  } else if (_.isPlainObject(node)) {
    _.forOwn(node, (el, key) => {
      linkDescendance(el)
      if (_.isPlainObject(el) || _.isArray(el)) {
        el.codakitKey = key
        el.codakitParent = node
      }
    })
    node.codakitKey = 'parent-is-array'
    node.codakitParent = grandparentIfArray
  }
}

const processAls = (path: string) => {
  fs.readFile(path, (err1, file) => {
    zlib.gunzip(file, (err2, gzip) => {
      xml2js.parseString(gzip.toString(), (err3, abletonObj) => {
        cleanAbleton(abletonObj)
        linkDescendance(abletonObj)
        const results = lintResults(abletonObj.Ableton.LiveSet)
        let foundError = false
        if (results.length) {
          results.forEach((typeOfIssue) => {
            typeOfIssue.forEach((issue) => {
              foundError = true
              // eslint-disable-next-line no-console
              console.log(issue)
            })
          })
        }
        if (foundError) {
          process.exit(1)
        } else {
          // eslint-disable-next-line no-console
          console.log('🎉 All tests passed!')
        }
      })
    })
  })
}

export default processAls

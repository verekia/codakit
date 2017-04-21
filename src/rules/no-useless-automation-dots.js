// @flow

import 'colors'

import _ from 'lodash'
import { isExceptionTrack } from '../utils'

/* eslint-disable no-console */

let errors = []

const testAutomationDots = (node, dots) => {
  let numUselessDots = 0
  if (dots.length === 2) { // One dot
    numUselessDots = 1
  } else {
    dots.forEach((dot, i) => { // Middle dots
      if (i > 0 && i < dots.length - 1) {
        if (dots[i] === dots[i - 1] && dots[i] === dots[i + 1]) {
          numUselessDots += 1
        }
      }
    })
    if (dots[dots.length - 1] === dots[dots.length - 2]) { // Last dot
      numUselessDots += 1
    }
  }
  if (numUselessDots > 0) {
    const paramName = node.codakitParent.codakitKey
    let deviceAscendant = node.codakitParent
    while (!(deviceAscendant.On && deviceAscendant.UserName && deviceAscendant.Annotation)) {
      deviceAscendant = deviceAscendant.codakitParent
      if (!deviceAscendant) { // In case we're on a Send, we avoid crashing here
        return
      }
    }

    const deviceName = deviceAscendant.codakitKey
    let trackAscendant = deviceAscendant.codakitParent
    while (!trackAscendant.TrackUnfolded) {
      trackAscendant = trackAscendant.codakitParent
    }
    const trackName = trackAscendant.Name.EffectiveName.Value
    if (!isExceptionTrack(trackAscendant)) {
      errors.push(`There are ${numUselessDots} useless automation dots on ${trackName.green}/${deviceName.green}/${paramName.green}`)
    }
  }
}

function traverse(node) {
  if (node.codakitKey === 'ArrangerAutomation') {
    if (node.Events.FloatEvent && _.isArray(node.Events.FloatEvent)) {
      testAutomationDots(node, node.Events.FloatEvent.map(dot => dot.$.Value))
    }
    if (node.Events.BoolEvent && _.isArray(node.Events.BoolEvent)) {
      testAutomationDots(node, node.Events.BoolEvent.map(dot => dot.$.Value))
    }
  }
  if (_.isArray(node)) {
    node.forEach((el) => {
      traverse(el)
    })
  } else if (_.isPlainObject(node)) {
    _.forOwn(node, (el, key) => {
      if (key !== 'codakitParent') {
        traverse(el)
      }
    })
  }
}

export default (abletonObj: Object) => {
  traverse(abletonObj)
  const tmpErrors = errors
  errors = []
  return tmpErrors
}

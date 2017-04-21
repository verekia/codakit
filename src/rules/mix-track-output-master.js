// @flow

import 'colors'

import { findTrackByName } from '../utils'

export default (abletonObj: Object) => {
  const errors = []
  const mixTrack = findTrackByName(abletonObj, 'Mix')
  if (mixTrack && mixTrack.DeviceChain.AudioOutputRouting.Target.Value !== 'AudioOut/Master') {
    // flow-disable-next-line
    errors.push(`Set ${'Mix'.green} track's audio output to ${'Master'.green}`)
  }
  return errors
}

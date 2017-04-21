// @flow

import { findTrackByName } from '../utils'

export default (abletonObj: Object) => {
  const errors = []
  const mixTrack = findTrackByName(abletonObj, 'Mix')
  if (mixTrack && mixTrack.DeviceChain.AudioOutputRouting.Target.Value !== 'AudioOut/Master') {
    errors.push('Set <b>Mix</b> track\'s audio output to Master')
  }
  return errors
}

// @flow

import { findTrackByName } from '../utils'

export default (abletonObj: Object) => {
  const errors = []
  const mixTrack = findTrackByName(abletonObj, 'Mix')
  if (mixTrack && mixTrack.DeviceChain.MainSequencer.MonitoringEnum.Value !== '0') {
    errors.push('Set <b>Mix</b> track\'s Monitoring to In')
  }
  return errors
}

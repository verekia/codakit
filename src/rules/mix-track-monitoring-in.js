// @flow

import 'colors'

import { findTrackByName } from '../utils'

export default (abletonObj: Object) => {
  const errors = []
  const mixTrack = findTrackByName(abletonObj, 'Mix')
  if (mixTrack && mixTrack.DeviceChain.MainSequencer.MonitoringEnum.Value !== '0') {
    // flow-disable-next-line
    errors.push(`Set ${'Mix'.green} track's Monitoring to In`)
  }
  return errors
}

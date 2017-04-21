// @flow

import 'colors'

import { getAllTracks, isExceptionTrack } from '../utils'

export default (abletonObj: Object) => {
  const errors = []
  getAllTracks(abletonObj).forEach((track) => {
    if (track.TrackGroupId.Value !== '-1' && track.DeviceChain.AudioOutputRouting.Target.Value !== 'AudioOut/GroupTrack' && !isExceptionTrack(track)) {
      errors.push(`${track.Name.EffectiveName.Value.green} should be routed to Group`)
    }
  })
  return errors
}

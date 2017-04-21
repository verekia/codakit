// @flow

import { getAllTracks, isExceptionTrack } from '../utils'

export default (abletonObj: Object) => {
  const errors = []
  getAllTracks(abletonObj).forEach((track) => {
    if (track.TrackGroupId.Value !== '-1' && track.DeviceChain.AudioOutputRouting.Target.Value !== 'AudioOut/GroupTrack' && !isExceptionTrack(track)) {
      errors.push(`<b>${track.Name.EffectiveName.Value}</b> should be routed to Group`)
    }
  })
  return errors
}

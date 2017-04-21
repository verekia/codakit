// @flow

import 'colors'

import { getAllTracks, isExceptionTrack } from '../utils'

export default (abletonObj: Object) => {
  const errors = []
  getAllTracks(abletonObj).forEach((track) => {
    if (track.Name.EffectiveName.Value !== 'Mix' && parseFloat(track.DeviceChain.Mixer.Volume.Manual.Value) > 0.5011872053 && !isExceptionTrack(track)) {
      errors.push(`${track.Name.EffectiveName.Value.green}'s volume should be inferior to -6db. Use Utility or some volume effect within the track`)
    }
  })
  return errors
}

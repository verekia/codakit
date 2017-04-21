// @flow

import { isExceptionTrack } from '../utils'

export default (abletonObj: Object) => {
  const errors = []
  abletonObj.Tracks.MidiTrack.forEach((track) => {
    if (track.DeviceChain.MidiInputRouting.Target.Value !== 'MidiIn/None' && !isExceptionTrack(track)) {
      errors.push(`Set track <b>${track.Name.EffectiveName.Value}</b>'s input to No Input`)
    }
  })
  abletonObj.Tracks.AudioTrack.forEach((track) => {
    if (track.DeviceChain.AudioInputRouting.Target.Value !== 'AudioIn/None' && !isExceptionTrack(track)) {
      errors.push(`Set track <b>${track.Name.EffectiveName.Value}</b>'s input to No Input`)
    }
  })
  return errors
}

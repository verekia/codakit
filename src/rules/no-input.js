// @flow

import 'colors'

import { isExceptionTrack } from '../utils'

export default (abletonObj: Object) => {
  const errors = []
  abletonObj.Tracks.MidiTrack.forEach((track) => {
    if (track.DeviceChain.MidiInputRouting.Target.Value !== 'MidiIn/None' && !isExceptionTrack(track)) {
      errors.push(`Set track ${track.Name.EffectiveName.Value.green}'s input to No Input`)
    }
  })
  abletonObj.Tracks.AudioTrack.forEach((track) => {
    if (track.DeviceChain.AudioInputRouting.Target.Value !== 'AudioIn/None' && !isExceptionTrack(track)) {
      errors.push(`Set track ${track.Name.EffectiveName.Value.green}'s input to No Input`)
    }
  })
  return errors
}

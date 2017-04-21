// @flow

import 'colors'

import { getAllTracks, isExceptionTrack } from '../utils'

export default (abletonObj: Object) => {
  const errors = []
  getAllTracks(abletonObj).forEach((track) => {
    if (track.DeviceChain.Mixer.Volume.ArrangerAutomation
      .Events.FloatEvent.length > 1 && !isExceptionTrack(track)) {
      errors.push(`Don't automate track volume on ${track.Name.EffectiveName.Value.green}, automate Utility or some other volume device`)
    }
  })
  return errors
}

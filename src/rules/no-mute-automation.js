// @flow

import 'colors'

import { getAllTracks, isExceptionTrack } from '../utils'

export default (abletonObj: Object) => {
  const errors = []
  getAllTracks(abletonObj).forEach((track) => {
    if (track.DeviceChain.Mixer.Speaker.ArrangerAutomation
      .Events.BoolEvent.length > 1 && !isExceptionTrack(track)) {
      errors.push(`Don't automate track muting on ${track.Name.EffectiveName.Value.green}, automate Utility or some other volume device`)
    }
  })
  return errors
}

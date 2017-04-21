// @flow

import { getAllTracks, isExceptionTrack } from '../utils'

export default (abletonObj: Object) => {
  const errors = []
  getAllTracks(abletonObj).forEach((track) => {
    if (track.DeviceChain.Mixer.Speaker.ArrangerAutomation
      .Events.BoolEvent.length > 1 && !isExceptionTrack(track)) {
      errors.push(`Don't automate track muting on <b>${track.Name.EffectiveName.Value}</b>, automate Utility or some other volume device`)
    }
  })
  return errors
}

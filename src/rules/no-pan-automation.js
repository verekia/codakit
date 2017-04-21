// @flow

import { getAllTracks, isExceptionTrack } from '../utils'

export default (abletonObj: Object) => {
  const errors = []
  getAllTracks(abletonObj).forEach((track) => {
    if (track.DeviceChain.Mixer.Pan.ArrangerAutomation
      .Events.FloatEvent.length > 1 && !isExceptionTrack(track)) {
      errors.push(`Don't automate track panning on <b>${track.Name.EffectiveName.Value}</b>, automate Utility or some other panning device`)
    }
  })
  return errors
}

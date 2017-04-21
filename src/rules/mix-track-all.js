// @flow

import { getAllTracks, findTrackByName, isExceptionTrack } from '../utils'

export default (abletonObj: Object) => {
  const errors = []
  const mixTrack = findTrackByName(abletonObj, 'Mix')
  const allButMixTrack = getAllTracks(abletonObj).filter(track => track.Name.EffectiveName.Value !== 'Mix')
  if (mixTrack) {
    allButMixTrack.forEach((track) => {
      if (track.DeviceChain.AudioOutputRouting.Target.Value !== `AudioOut/Track.${mixTrack.$.Id}/TrackIn` && track.TrackGroupId.Value === '-1' && !isExceptionTrack(track)) {
        errors.push(`Set track <b>${track.Name.EffectiveName.Value}</b>'s audio output to <b>Mix</b>`)
      }
    })
  }
  return errors
}

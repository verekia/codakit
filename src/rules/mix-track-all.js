// @flow

import 'colors'

import { getAllTracks, findTrackByName, isExceptionTrack } from '../utils'

export default (abletonObj: Object) => {
  const errors = []
  const mixLabel = '(Mix)'
  const scLabel = '(SC)'
  const mixTrack = findTrackByName(abletonObj, mixLabel)
  const scTrack = findTrackByName(abletonObj, scLabel)
  const allButThoseTracks = getAllTracks(abletonObj).filter(track =>
    track.Name.EffectiveName.Value !== mixLabel && track.Name.EffectiveName.Value !== scLabel)
  if (mixTrack) {
    allButThoseTracks.forEach((track) => {
      if (track.DeviceChain.AudioOutputRouting.Target.Value !== `AudioOut/Track.${mixTrack.$.Id}/TrackIn`
        && track.DeviceChain.AudioOutputRouting.Target.Value !== `AudioOut/Track.${scTrack.$.Id}/TrackIn`
        && track.TrackGroupId.Value === '-1' && !isExceptionTrack(track)) {
        // flow-disable-next-line
        errors.push(`Set track ${track.Name.EffectiveName.Value.green}'s audio output to ${mixLabel.green} or ${scLabel.green}`)
      }
    })
  }
  return errors
}

// @flow

import _ from 'lodash'

import { getAllTracks, isExceptionTrack } from '../utils'

const indexToLetterMap = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

export default (abletonObj: Object) => {
  const errors = []
  getAllTracks(abletonObj).forEach((track) => {
    track.DeviceChain.Mixer.Sends.TrackSendHolder.forEach((trackSendHolder, index) => {
      // The _.isPlainObject is to check if FloatEvents got turned into a plain object
      // by the clean up function (single automation event) or is still an array (multiple events)
      if (trackSendHolder.Active.Value === 'true' && parseFloat(trackSendHolder.Send.Manual.Value) < 0.0005 && _.isPlainObject(trackSendHolder.Send.ArrangerAutomation.Events.FloatEvent) && !isExceptionTrack(track)) {
        errors.push(`Disable <b>Send ${indexToLetterMap[index]}</b> on <b>${track.Name.EffectiveName.Value}</b> track`)
      }
    })
  })
  return errors
}

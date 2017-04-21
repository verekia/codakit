// @flow

import _ from 'lodash'
import 'colors'

import { getAllTracks, isExceptionTrack } from '../utils'

export default (abletonObj: Object) => {
  const errors = []
  getAllTracks(abletonObj).forEach((track) => {
    if (track.DeviceChain.Mixer.ViewStateSesstionTrackWidth.Value !== '55' && !isExceptionTrack(track)) {
      errors.push(`Adjust width of ${track.Name.EffectiveName.Value.green} in Session view`)
    }
    if (_.isArray(track.DeviceChain.AutomationLanes.AutomationLanes.AutomationLane)) {
      errors.push(`Fold automation lanes of ${track.Name.EffectiveName.Value.green}`)
    } else {
      if (
        track.DeviceChain.AutomationLanes.AutomationLanes.AutomationLane.LaneHeight.Value !== '17' &&
        track.DeviceChain.AutomationLanes.AutomationLanes.AutomationLane.LaneHeight.Value !== '34' && !isExceptionTrack(track)) {
        errors.push(`Fold default automation lane of ${track.Name.EffectiveName.Value.green}`)
      }
      if (
        (track.DeviceChain.AutomationLanes.AutomationLanes.AutomationLane.SelectedDevice.Value !== '0' ||
        track.DeviceChain.AutomationLanes.AutomationLanes.AutomationLane.SelectedEnvelope.Value !== '0') && !isExceptionTrack(track)) {
        errors.push(`Select None for automation of ${track.Name.EffectiveName.Value.green}`)
      }
    }
  })
  return errors
}

// @flow

import _ from 'lodash'

import { getAllTracks } from '../utils'

export default (abletonObj: Object) => {
  const errors = []
  getAllTracks(abletonObj).forEach((track) => {
    if (track.DeviceChain.Mixer.ViewStateSesstionTrackWidth.Value !== '55') {
      errors.push(`Adjust width of <b>${track.Name.EffectiveName.Value}</b> in Session view`)
    }
    if (_.isArray(track.DeviceChain.AutomationLanes.AutomationLanes.AutomationLane)) {
      errors.push(`Fold automation lanes of <b>${track.Name.EffectiveName.Value}</b>`)
    } else {
      if (
        track.DeviceChain.AutomationLanes.AutomationLanes.AutomationLane.LaneHeight.Value !== '17' &&
        track.DeviceChain.AutomationLanes.AutomationLanes.AutomationLane.LaneHeight.Value !== '34') {
        errors.push(`Fold default automation lane of <b>${track.Name.EffectiveName.Value}</b>`)
      }
      if (
        track.DeviceChain.AutomationLanes.AutomationLanes.AutomationLane.SelectedDevice.Value !== '0' ||
        track.DeviceChain.AutomationLanes.AutomationLanes.AutomationLane.SelectedEnvelope.Value !== '0') {
        errors.push(`Select None for automation of <b>${track.Name.EffectiveName.Value}</b>`)
      }
    }
  })
  return errors
}

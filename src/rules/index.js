// @flow

import { argv } from 'yargs'

import allTracksNamed from './all-tracks-named'
import groupRouting from './group-routing'
import mixTrackMonitoringIn from './mix-track-monitoring-in'
import mixTrackOutputMaster from './mix-track-output-master'
import mixTrackAll from './mix-track-all'
import noInput from './no-input'
import noMuteAutomation from './no-mute-automation'
import noOverdub from './no-overdub'
import noPanAutomation from './no-pan-automation'
import noVolumeAutomation from './no-volume-automation'
import noSameTrackName from './no-same-track-name'
import trackMaxVolume from './track-max-volume'
import noUselessAutomationDots from './no-useless-automation-dots'
import unusedSends from './unused-sends'
import noScenes from './no-scenes'
import foldedTracks from './folded-tracks'
import UIBlocks from './ui-blocks'

const rules = {
  'all-tracks-named': allTracksNamed,
  'group-routing': groupRouting,
  'mix-track-monitoring-in': mixTrackMonitoringIn,
  'mix-track-output-master': mixTrackOutputMaster,
  'mix-track-all': mixTrackAll, // Wrong, need reference tracks ok
  'no-input': noInput,
  'no-mute-automation': noMuteAutomation,
  'no-overdub': noOverdub,
  'no-pan-automation': noPanAutomation,
  'no-volume-automation': noVolumeAutomation,
  'no-same-track-name': noSameTrackName,
  'track-max-volume': trackMaxVolume, // MIDI tracks with no instruments give an error
  'no-scenes': noScenes,
  'folded-tracks': foldedTracks,
  'no-useless-automation-dots': noUselessAutomationDots,
  'unused-sends': unusedSends, // Les MIDI track sans devices montrent pas leurs sends
  'ui-blocks': UIBlocks,
  // no Solo track
  // wrong-sample-rate
  // No armed midi/audio tracks
  // Re-enable automation is a global Ableton thing, not project-based. Does not save.
  // tracks within groups should be routed to group
  // ne pas oublier les checks sur la master track quand c'est pertinent (pas le name par exemple)
  // Killer feature: Enforce scale (except clips that are labelled specifically to go offscale)
  // Clip clones (if $var check exact same).
  // Clips même couleur que la piste sauf si named. Clips doivent etre rouges si modulations.
}

const rulesToDeactivate = argv.deactivate ? argv.deactivate.split(',') : []

rulesToDeactivate.forEach((ruleKey) => {
  delete rules[ruleKey]
})

export default rules

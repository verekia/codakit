// @flow

export default (abletonObj: Object) => {
  const errors = []
  if (abletonObj.ViewStates.ArrangerMixer.Value === '0') {
    errors.push('Show Mixer view')
  }
  if (abletonObj.ViewStates.ArrangerIO.Value === '1') {
    errors.push('Hide IO view')
  }
  if (abletonObj.ViewStates.ArrangerReturns.Value === '1') {
    errors.push('Hide Returns view')
  }
  if (abletonObj.ViewStates.ArrangerTrackDelay.Value === '1') {
    errors.push('Hide Delay view')
  }
  if (abletonObj.ViewStates.SessionCrossFade.Value === '1') {
    errors.push('Hide Crossfade view')
  }
  return errors
}

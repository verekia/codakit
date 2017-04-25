// @flow

export default (abletonObj: Object) => {
  const errors = []
  if (abletonObj.ViewStates.SessionIO.Value === '0') {
    errors.push('Show IO in Session')
  }
  if (abletonObj.ViewStates.SessionSends.Value === '0') {
    errors.push('Show Sends in Session')
  }
  if (abletonObj.ViewStates.SessionReturns.Value === '0') {
    errors.push('Show Returns in Session')
  }
  if (abletonObj.ViewStates.SessionMixer.Value === '0') {
    errors.push('Show Mixer in Session')
  }
  if (abletonObj.ViewStates.SessionTrackDelay.Value === '0') {
    errors.push('Show Delay in Session')
  }
  if (abletonObj.ViewStates.ArrangerShowOverView.Value === '1') {
    errors.push('Hide Overview in Arrangement')
  }
  if (abletonObj.ViewStates.SessionShowOverView.Value === '1') {
    errors.push('Hide Overview in Session')
  }
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

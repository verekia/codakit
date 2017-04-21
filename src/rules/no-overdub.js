// @flow

export default (abletonObj: Object) => {
  const errors = []
  if (abletonObj.ArrangementOverdub.Value === 'true') {
    errors.push('Deactivate Overdub')
  }
  return errors
}

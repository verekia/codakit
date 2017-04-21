// @flow

import 'colors'

import { getAllTracks } from '../utils'

export default (abletonObj: Object) => {
  const errors = []
  const occurencesHash = {}
  getAllTracks(abletonObj).forEach((track) => {
    const currentName = track.Name.EffectiveName.Value
    if (occurencesHash[currentName]) {
      errors.push(`The name ${currentName.green} is used on multiple tracks`)
    }
    occurencesHash[currentName] = true
  })
  return errors
}

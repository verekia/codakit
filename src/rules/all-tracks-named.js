// @flow

import 'colors'

import { getAllTracks } from '../utils'

export default (abletonObj: Object) => {
  const errors = []
  getAllTracks(abletonObj).forEach((track) => {
    if (!track.Name.UserName.Value) {
      errors.push(`Give track ${track.Name.EffectiveName.Value.green} a name`)
    }
  })
  return errors
}

// @flow

import { getAllTracks } from '../utils'

export default (abletonObj: Object) => {
  const errors = []
  getAllTracks(abletonObj).forEach((track) => {
    if (!track.Name.UserName.Value) {
      errors.push(`Give track <b>${track.Name.EffectiveName.Value}</b> a name`)
    }
  })
  return errors
}

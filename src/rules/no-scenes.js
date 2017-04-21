// @flow

import _ from 'lodash'

export default (abletonObj: Object) => {
  const errors = []
  if (_.isArray(abletonObj.SceneNames.Scene)) {
    errors.push('Delete all <b>scenes</b>')
  }
  return errors
}

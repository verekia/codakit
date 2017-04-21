// @flow

const getAllTracks = (abletonObj: Object) =>
  (abletonObj.Tracks.MidiTrack || []).concat(
    abletonObj.Tracks.AudioTrack || [],
    abletonObj.Tracks.ReturnTrack || [],
    abletonObj.Tracks.GroupTrack || [],
  )

const findTrackByName = (abletonObj: Object, name: string) =>
  getAllTracks(abletonObj).filter(track => track.Name.EffectiveName.Value === name)[0]

const isExceptionTrack = (track: Object) => track.Name.EffectiveName.Value.charAt(0) === '!'

export {
  getAllTracks,
  findTrackByName,
  isExceptionTrack,
}

var midiFileParser = require('midi-file-parser')
var file = require('fs').readFileSync('song.mid', 'binary')
var midi = midiFileParser(file)

var result = []

dump(5, -3.06, 'sawtooth', 0.5)
dump(4, -3.06, 'sine', 0.1)
dump(6, -3.06, 'triangle', 0.1)
dump(7, -3.00, 'square', 0.1)
dump(8, -3.06, 'triangle', 0.1)
dump(12, -3.06, 'sine', 0.4)
dump(13, -3.06, 'square', 0.4)

require('fs').writeFile('./song.json', JSON.stringify(result))

function dump(trackId, offset, shape, attack){
  var time = offset || 0
  var onNotes = {}
  midi.tracks[trackId].forEach(function(event){
    time += event.deltaTime / 500
    if (event.subtype === 'noteOn'){
      onNotes[event.noteNumber] = time
    } else if (event.subtype === 'noteOff'){
      var startAt = onNotes[event.noteNumber]
      if (startAt != null){
        result.push([
          event.noteNumber, 
          shape,
          attack,
          round(startAt), 
          round(time - startAt)
        ])
      }
      onNotes[event.noteNumber] = null
    }
  })
}

function round(number){
  return Math.round(number * 100) / 100 
}
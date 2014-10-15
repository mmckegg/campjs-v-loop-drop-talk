

var serve = require('./serve.js')


// browser presentation
serve('./entry.js', {
  styles: './styles/*.mcss',
  publish: './static',
  port: 1624
})







/*
// Node.js midi access
var MidiStream = require('midi-stream')
var launchpad = MidiStream('Launchpad Mini')
launchpad.write([176, 0, 0]) // all lights off!
launchpad.write([144, 4, 127])
launchpad.write([144, 5, 127])
launchpad.write([144, 15, 127])
*/







/*
// Create virtual midi port
var io = MidiStream('Wellington.js Looper', {
  virtual: true, 
  includeTiming: true
})
*/







/*
// Sync to Ableton Live MIDI Clock

var position = 0
io.on('data', function(data){
  if (data[0] === 248){ // tick
    tick(position++)
  } else if (data[0] === 242){ // position
    position = data[2]
    launchpad.write([176, 0, 0]) // all lights off!
  }
})

function tick(position){
  var pos = position % 128
  if (pos === 0) launchpad.write([176, 0, 0])
  launchpad.write([144, pos, 127])
}
*/




/*
// map launchpad midi to drumrack

function getDrumRackNote(buttonId){
  var start = 32 // C1
  var row = Math.floor(buttonId / 16)
  var col = buttonId % 16
  if (col < 4){
    return '1/' + (start + col + ((8-row) * 4))
  } else {
    return '2/' + (start + (col-4) + ((8-row) * 4))
  }
}

function getMidi(id, velocity){
  var split = id.split('/')
  var channel = parseInt(split[0])
  return [144 + (channel-1), parseInt(split[1]), velocity]
}

launchpad.on('data', function(data){
  if (data[0] === 144){ // grid
    var noteId = getDrumRackNote(data[1])
    if (noteId){
      io.write(getMidi(noteId, data[2]))
    } 
  }
})

*/





/*
// midi repeat

var activeNotes = []
var playingNotes = []

function getButtonId(input){
  var split = input.split('/')

  var start = 32 // C1
  var channel = parseInt(split[0])
  var note = parseInt(split[1])

  note = note - start
  var row = 8 - Math.floor(note / 4)
  var col = note % 4

  if (channel == 1){
    return row * 16 + col
  } else if (channel == 2) {
    return row * 16 + col + 4
  }
}

function getMidi(id, velocity){
  var split = id.split('/')
  var channel = parseInt(split[0])
  return [144 + (channel-1), parseInt(split[1]), velocity]
}

function tick(position){
  var rate = 1/4
  var mod = 24 * rate
  var pos = position % mod
  if (pos === 0){
    activeNotes.forEach(function(id){
      io.write(getMidi(id, 127))
      launchpad.write([144, getButtonId(id), 127])
      playingNotes.push(id)
    })
  } else if (pos > mod/2){
    playingNotes.forEach(function(id){
      io.write(getMidi(id, 0))
      launchpad.write([144, getButtonId(id), 0])
    })
    playingNotes.length = 0
  }
}

launchpad.on('data', function(data){
  if (data[0] === 144){ // grid
    var noteId = getDrumRackNote(data[1])
    if (noteId){
      if (data[2]){
        activeNotes.push(noteId)
      } else {
        var index = activeNotes.indexOf(noteId)
        if (~index) activeNotes.splice(index, 1)
      }
    }
  }
})
*/






/*
// Looper!

var loopBuffer = []
var playback = []
var loopLength = 4

function tick(position){
  var rate = 1/4
  var mod = 24 * rate
  var pos = position % mod
  var step = Math.floor(position / 24 / rate) % (loopLength / rate)
  if (pos === 0){
    // merge current playback with loop
    var notes = activeNotes.concat(playback[step]||[])

    notes.forEach(function(id){
      io.write(getMidi(id, 127))
      launchpad.write([144, getButtonId(id), 127])
      playingNotes.push(id)
    })

    // add playback to buffer
    loopBuffer[step] = playingNotes.slice()

  } else if (pos > mod/2){
    playingNotes.forEach(function(id){
      io.write(getMidi(id, 0))
      launchpad.write([144, getButtonId(id), 0])
    })
    playingNotes.length = 0
  }
}

function storeLoop(){
  playback = loopBuffer.slice()
  console.log(playback)
}

function clearLoop(){
  playback = []
}

launchpad.on('data', function(data){
  if (data[0] === 176 && data[2]){
    if (data[1] === 104){ // button 1
      storeLoop()
    } else if (data[1] === 105){ // button 2
      clearLoop()
    }
  }
})

*/






/*
// UNDO / REDO

var undos = []
var redos = []

function undo(){
  redos.push(playback)
  playback = undos.pop() || []
}

function redo(){
  undos.push(playback)
  playback = redos.pop() || []
}

function storeLoop(){
  undos.push(playback)
  playback = loopBuffer.slice()
}

function clearLoop(){
  undos.push(playback)
  playback = []
}

launchpad.on('data', function(data){
  if (data[0] === 176 && data[2]){
    if (data[1] === 106){ // button 3
      undo()
    } else if (data[1] === 107){ // button 4
      redo()
    }
  }
})
*/
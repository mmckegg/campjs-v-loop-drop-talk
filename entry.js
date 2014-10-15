


require('./lib/auto-reload')
var display = require('./lib/display-slide.js')


// Welcome Slide
display(require('./slides/home.js'))





/*
// WAAPI
display(require('./slides/waapi.js'))
*/




/*
// Basic AudioNode Setup

display(require('./slides/audio-context.js'))

var audio = new AudioContext()

playNote(60, "sawtooth", 0.4, 0, 1.42)
playNote(67, "sawtooth", 0.4, 1.6, 1.38)
playNote(72, "sawtooth", 0.4, 3.14, 2.54)

function playNote(note, shape, attack, at, duration){

  var stopAt = at + duration

  var output = audio.createGain()
  output.gain.value = 0.3
  output.connect(audio.destination)

  var oscillator = audio.createOscillator()
  oscillator.type = shape
  oscillator.connect(output)
  oscillator.detune.value = (note - 69) * 100
  oscillator.start(at)
  oscillator.stop(stopAt)



  //// add envelope
  //var ADSR = require('adsr')
  //var adsr = ADSR(audio)
  //adsr.connect(output.gain)
  //adsr.attack = attack
  //adsr.release = 0.6
  //adsr.value = 0.3
  //adsr.start(at)

  //stopAt = adsr.stop(stopAt)
  //oscillator.stop(stopAt)


  //// add filter
  //var filter = audio.createBiquadFilter()
  //output.disconnect()
  //output.connect(filter)
  //filter.connect(audio.destination)
  //filter.frequency.value = 600


  //// modulate filter frequency with lfo
  //var LFO = require('lfo')
  //var lfo = LFO(audio)
  //lfo.amp.value = 4
  //lfo.rate.value = 5
  //lfo.connect(oscillator.frequency)
  //lfo.start(at)
  //lfo.stop(stopAt)


}
*/





/*
// DROP THE ... 
require('./song.json').forEach(function(event){
  playNote.apply(this, event)
})
*/





/*
// Scheduling Events
display(require('./slides/schedule.js'))


var Bopper = require('bopper')
var scheduler = window.scheduler = Bopper(audio)

var playback = [
  {position: 0, length: 0.1},
  {position: 1, length: 0.1},
  {position: 2, length: 0.1},
  {position: 3, length: 0.1},
  {position: 3.5, length: 0.1},
  {position: 4, length: 0.1},
  {position: 5, length: 0.1},
  {position: 6, length: 0.1},
  {position: 7, length: 0.1},
  {position: 7+1/3, length: 0.1},
  {position: 7+2/3, length: 0.1}
]

scheduler.on('data', function(schedule){
  // schedule: from, to, time, beatDuration

  playback.forEach(function(note){
    if (note.position >= schedule.from && note.position < schedule.to){
      var delta = note.position - schedule.from
      var time = schedule.time + delta
      var duration = note.length * schedule.beatDuration
      playNote(62, 'sawtooth', 0, time, duration)
    }
  })

})

scheduler.setTempo(130)

setTimeout(function(){
  scheduler.start()
}, 10)
*/





/*
// Looping
var Ditty = require('ditty') // v1.2 (old api)
var player = Ditty(scheduler)

var synth = require('./lib/synth.js')(audio)
synth.connect(audio.destination)

var C = 60-24, F = 65-24, G = 67-24, A = 69-24
player.setPlayback([
  [144, C, 100, 0.0, 0.9],
  [144, C, 100, 1.0, 0.9],
  [144, F, 100, 2.0, 0.9],
  [144, F, 100, 3.0, 0.9],
  [144, G, 100, 4.0, 0.9],
  [144, G, 100, 5.0, 0.4],
  [144, F, 100, 5.5, 0.9],
  [144, F, 100, 6.5, 0.4],
  [144, F, 100, 7.0, 0.4],
  [144, F, 100, 7.5, 0.4]
], 8)

player.on('data', function(event){
  // event: key, data, action, time, position
  if (event.data[2]){
    synth.triggerOn(event.time, event.data[1], event.data[2])
  } else {
    synth.triggerOff(event.time, event.data[1])
  }
})
*/



/*
// Web MIDI API
display(require('./slides/web-midi.js'))

var MidiStream = require('web-midi')
var midiPort = MidiStream('Launchpad Mini')

*/



/*
// Hooking up the launchpad

var LaunchpadControl = require('midi-looper-launchpad')
var MidiLooper = require('midi-looper')

var looper = MidiLooper(function(){ 
  return scheduler.getCurrentPosition()
})

looper.pipe(player)

var launchpad = LaunchpadControl(midiPort, looper)
scheduler.pipe(launchpad)

function playMidi(data){
  var id = data[1] // transpose
  if (data[2]){
    synth.triggerOn(audio.currentTime, id, data[2])
  } else {
    synth.triggerOff(audio.currentTime, id)
  }
}

launchpad.on('data', playMidi)
launchpad.pipe(looper)

player.on('data', function(event){ // FEEDBACK!
  looper.write([
    event.data[0], 
    event.data[1], 
    event.data[2], 
    event.position
  ])
})
*/


/*
// LIVE DEMO!
display(require('./slides/demo.js'))
*/

/*
// end
display(require('./slides/thanks.js'))

*/




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

var output = audio.createGain()
output.gain.value = 0.3
output.connect(audio.destination)

var oscillator = audio.createOscillator()
oscillator.type = 'sawtooth'
oscillator.connect(output)
oscillator.detune.value = -12 * 100
oscillator.start(0)
oscillator.stop(1)

*/



/*
// add envelope
var ADSR = require('adsr')
var adsr = ADSR(audio)
adsr.connect(output.gain)
adsr.attack = 0.1
adsr.release = 0.6
adsr.start(0)
oscillator.stop(adsr.stop(1))
*/
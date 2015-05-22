require('./lib/auto-reload')
var display = require('./lib/display-slide.js')


// Welcome Slide
display(require('./slides/home.js'))









/*
__        _______ ____       _   _   _ ____ ___ ___       _    ____ ___ 
\ \      / / ____| __ )     / \ | | | |  _ \_ _/ _ \     / \  |  _ \_ _|
 \ \ /\ / /|  _| |  _ \    / _ \| | | | | | | | | | |   / _ \ | |_) | | 
  \ V  V / | |___| |_) |  / ___ \ |_| | |_| | | |_| |  / ___ \|  __/| | 
   \_/\_/  |_____|____/  /_/   \_\___/|____/___\___/  /_/   \_\_|  |___|
                                         
                      webaudio.github.io/web-audio-api
*/




var audio = new AudioContext()








/*

// don't deafen everyone o_0
var output = audio.createGain()
output.connect(audio.destination)
output.gain.value = 0.3

// create an oscillator
var oscillator = audio.createOscillator()
oscillator.connect(output)

oscillator.type = 'square'

oscillator.start(audio.currentTime)
oscillator.stop(audio.currentTime + 1+2)
*/

/*
// add attack
output.gain.value = 0
output.gain.setTargetAtTime(0.3, audio.currentTime, 0.1)
*/

/*
// add release
output.gain.setTargetAtTime(0, audio.currentTime + 1, 0.2)
*/

/*
function playNote(pitch, shape, attack, at, duration) {
  var output = audio.createGain()
  output.connect(audio.destination)
  output.gain.value = 0.3

  var oscillator = audio.createOscillator()
  oscillator.connect(output)

  oscillator.detune.value = (pitch - 69) * 100
  oscillator.type = shape

  oscillator.start(at)
  oscillator.stop(at + duration + attack * 8)

  output.gain.value = 0
  output.gain.setTargetAtTime(0.3, at, attack)
  output.gain.setTargetAtTime(0, at + duration, 0.2)
}

// play a sequence of notes
playNote(60, "sawtooth", 0.4, 0, 1.42)
playNote(67, "sawtooth", 0.4, 1.6, 1.38)
playNote(72, "sawtooth", 0.4, 3.14, 2.54)
*/

/*
// DROP THE ... 
require('./song.json').forEach(function(event){
  playNote.apply(this, event)
})
*/










/*
 __        _______ ____    __  __ ___ ____ ___      _    ____ ___ 
 \ \      / / ____| __ )  |  \/  |_ _|  _ \_ _|    / \  |  _ \_ _|
  \ \ /\ / /|  _| |  _ \  | |\/| || || | | | |    / _ \ | |_) | | 
   \ V  V / | |___| |_) | | |  | || || |_| | |   / ___ \|  __/| | 
    \_/\_/  |_____|____/  |_|  |_|___|____/___| /_/   \_\_|  |___|

                   webaudio.github.io/web-midi-api

              Released in Chrome v43 only a few days ago!
*/




/*

window.navigator.requestMIDIAccess().then(function(midi){
  var input = getPort(midi.inputs, 'Launchpad Mini')
  var output = getPort(midi.outputs, 'Launchpad Mini')

  // turn off all lights
  output.send([176,0,0])

  input.onmidimessage = function(e) {
    output.send(e.data)
    var note = getMidiNote(e.data[1])

    if (e.data[2]) {
      playNote(note, 'sawtooth', 0.1, 0.3, audio.currentTime, 0.5)
    }
  }

}, function error(){})

function getPort(ports, name) {
  for (var port of ports) {
    if (port[1].name === 'Launchpad Mini') {
      return port[1]
    }
  }
}


function getMidiNote(buttonId){
  var start = 32 // C1
  var row = Math.floor(buttonId / 16)
  var col = buttonId % 16
  return start + col + row * 8
}

*/








/*
                  ___  __                __     __ 
            |  | |__  |__)     /\  |  | |  \ | /  \
            |/\| |___ |__)    /~~\ \__/ |__/ | \__/
                  __   __        __        __   __ 
            |  | /  \ |__) |__/ /__` |__| /  \ |__)
            |/\| \__/ |  \ |  \ .__/ |  | \__/ |   

            Today! 11 AM - Coltman Hut Hall




            -----------------------------------
            github.com/mmckegg
            twitter.com/MattMcKegg
            soundcloud.com/destroy-with-science
*/







/*
// end
display(require('./slides/thanks.js'))
*/

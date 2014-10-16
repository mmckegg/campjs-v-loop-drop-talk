var ADSR = require('adsr')
var LFO = require('lfo')

module.exports = Synth


function Synth(audio){
  var node = audio.createGain()

  var onNotes = {}

  node.triggerOn = function(at, id, velocity){
    node.triggerOff(at, id) // choke existing note if any
    var oscillator = audio.createOscillator()
    var envelope = audio.createGain()
    oscillator.connect(envelope)
    envelope.connect(node)

    var adsr = ADSR(audio)
    adsr.connect(envelope.gain)
    adsr.attack = 0
    adsr.release = 0.6
    adsr.value = 0.3
    adsr.start(at)

    var lfo = LFO(audio)
    lfo.amp.value = 4
    lfo.rate.value = 5
    lfo.connect(oscillator.frequency)
    lfo.start(at)

    oscillator.detune.value = (id - 69+24) * 100
    oscillator.type = 'sawtooth'
    oscillator.start(at)

    onNotes[id] = {player: oscillator, envelope: adsr, vibrato: lfo}
  }

  node.triggerOff = function(at, id){
    if (onNotes[id]){
      at = onNotes[id].envelope.stop(at)
      onNotes[id].player.stop(at)
      onNotes[id].vibrato.stop(at)
      onNotes[id] = null
    }
  }

  return node
}
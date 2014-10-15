module.exports = Synth

function Synth(audio){
  var node = audio.createGain()
  node.gain.value = 0.3

  var onNotes = {}

  node.triggerOn = function(at, id, velocity){
    node.triggerOff(at, id) // choke existing note if any
    var oscillator = audio.createOscillator()
    oscillator.connect(node)
    oscillator.detune.value = (id - 69+24) * 100
    oscillator.type = 'sawtooth'
    oscillator.start(at)
    onNotes[id] = oscillator
  }

  node.triggerOff = function(at, id){
    if (onNotes[id]){
      onNotes[id].stop(at)
      onNotes[id] = null
    }
  }

  return node
}
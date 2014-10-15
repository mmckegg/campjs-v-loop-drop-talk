var mercury = require('mercury')
var h = require('micro-css/h')(mercury.h)

module.exports = function(){
  return h('Slide', [
    h('h2', 'Web MIDI API'),
    h('p', 'MIDI device access direct from browser. Only available in Chrome (so far) and is behind a flag.'),
    h('p', 'See chrome://flags#enable-web-midi'),
    h('h3.github', 'webaudio.github.io/web-midi-api/')
  ])
}
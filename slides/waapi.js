var mercury = require('mercury')
var h = require('micro-css/h')(mercury.h)

module.exports = function(){
  return h('Slide', [
    h('h2', 'Web Audio API'),
    h('p', 'The Web Audio API provides a powerful and versatile system for controlling audio on the Web, allowing developers to choose audio sources, add effects to audio, create audio visualizations, apply spatial effects (such as panning)  and much more.'),
    h('h3.github', 'http://webaudio.github.io/web-audio-api/')
  ])
}
var mercury = require('mercury')
var h = require('micro-css/h')(mercury.h)

module.exports = function(){
  return h('Slide', [
    h('h3', 'new AudioContext()'),
    h('img', {src: '/modular-routing2.png'})
  ])
}
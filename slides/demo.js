var mercury = require('mercury')
var h = require('micro-css/h')(mercury.h)

module.exports = function(){
  return h('Slide', [
    h('h2', 'Okay, enough code...'),
    h('h3', "Let's see this thing!"),
    h('h3.github', 'github.com/mmckegg/loop-drop-app')
  ])
}
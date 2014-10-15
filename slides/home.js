var mercury = require('mercury')
var h = require('micro-css/h')(mercury.h)

module.exports = function(){
  return h('Slide', [
    h('h1', 'JavaScript Audio / MIDI'),
    h('h2', 'by Matt McKegg'),
    h('h3.github', 'github.com/mmckegg'),
    h('h3.twitter', 'twitter.com/MattMcKegg')
  ])
}
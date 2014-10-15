var mercury = require('mercury')
var h = require('micro-css/h')(mercury.h)

module.exports = function(){
  return h('Slide', [
    h('h1', 'thanks for listening!'),
    h('h2', 'any questions?'),
    h('h3.github', 'github.com/mmckegg/loop-drop-app'),
    h('h3.twitter', 'twitter.com/MattMcKegg')
  ])
}
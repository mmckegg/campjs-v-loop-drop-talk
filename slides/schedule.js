var mercury = require('mercury')
var h = require('micro-css/h')(mercury.h)

module.exports = function(){
  return h('Slide', [
    h('h2', 'Scheduling Events'),
    h('p', "So that everything doesn't all happen at once!"),
    h('h3.github', 'http://github.com/mmckegg/bopper')
  ])
}
var mercury = require('mercury')
var h = require('micro-css/h')(mercury.h)

var loop = mercury.main(null, function(state){
  if (typeof state === 'function'){
    return h('SlideShow', {}, state())
  } else {
    return h('div')
  }
})

document.body.appendChild(loop.target)

module.exports = loop.update
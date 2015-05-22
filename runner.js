var serve = require('./serve.js')

// browser presentation
serve('./entry.js', {
  styles: './styles/*.mcss',
  publish: './static',
  port: 1624
})
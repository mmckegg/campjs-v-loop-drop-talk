var browserify = require('browserify')
var watchify = require('watchify')
var EventServer = require('sse')
var http = require('http')
var catw = require('catw')
var Concat = require('concat-stream')
var mcss = require('micro-css')
var ecstatic = require('ecstatic');

module.exports = serve

function serve(entryPath, opts){



  var opts = opts || {}
  var server = http.createServer(respond)
  var clients = []

  var serveStatic = opts.publish ? 
    ecstatic({ root: opts.publish }) :
    null

  var w = watchify(browserify(entryPath, { 
    cache: {}, 
    packageCache: {}, 
    fullPaths: true,
    debug: true
  }))

  function kill(){
    clients.forEach(sendReloadSoon)
    process.nextTick(process.exit)
  }

  process.on('SIGTERM', kill)
  process.on('SIGINT', kill)

  w.on('update', function(){
    clients.forEach(sendReload)
  })

  w.on('error', function(err){
    console.log(err)
  })

  function sendReload(target){
    target.send('reload')
  }

  function sendReloadSoon(target){
    target.send('reload soon')
  }

  function removeSelfFromClients(){
    var index = clients.indexOf(this)
    if (~index){
      console.log('remove client')
      clients.splice(index, 1)
    }
  }

  var styleBundle = null
  if (opts.styles){
    catw(opts.styles, function(stream){
      stream.pipe(Concat(function(data){
        styleBundle = mcss(String(data))
        clients.forEach(sendReload)
      }))
    })
  }

  server.listen(opts.port || 8080, function(){
    var sse = new EventServer(server)
    sse.on('connection', function(client) {
      console.log('new client')
      clients.push(client)
      client.on('close', removeSelfFromClients)
    })
  })

  function respond(req, res){
    if (req.url === '/bundle.js'){
      console.log('serve bundle')
      res.writeHead(200, {'Content-Type': 'application/javascript'})
      w.bundle().pipe(res).on('error', function(err){
        res.end(';console.error('+ JSON.stringify(err.message || err) +')')
      })
    } else if (req.url === '/bundle.css'){
      res.writeHead(200, {'Content-Type': 'text/css'})
      res.end(styleBundle)
    } else if (req.url === '/') {
      console.log('serve html')
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.end('<!doctype html><link rel="stylesheet" href="/bundle.css"/><body><script src="/bundle.js"></script></body>')
    } else if (serveStatic){
      serveStatic(req, res)
    }
  }

  return function sendMessage(message){
    clients.forEach(function(client){
      client.send(message)
    })
  }
}
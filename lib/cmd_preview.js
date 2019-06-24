var express = require('express')
var serveStatic = require('serve-static')
var path = require('path')
var utils = require('./utils')
var open = require('open')
module.exports = function(dir) {
  dir = dir || ""
  var app = express()
  var router = express.Router()
  console.log(path.resolve(dir, 'assets'))
  app.use('/assets', serveStatic(path.resolve(dir, 'assets')))
  app.use(router)
  router.get('/posts/*', function(req, res, next) {
    var name = utils.stripExtname(req.params[0])
    var file = path.resolve(dir, '_posts', name+ '.md')
    var html = utils.renderPost(dir, file)
    res.set({
      'Content-Type': 'text/html',
    });
    res.send(html)
  })

  router.get('/', function(req, res, next) {
    var html = utils.renderIndex(dir)
    res.send(html)
  })
  var config = utils.loadConfig(dir)
  var port = config.port || 3000
  var url = 'http://127.0.0.1:'+port
  app.listen(port)
  open(url)
}


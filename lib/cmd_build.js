var path = require('path')
var utils = require('./utils')
var fse = require('fs-extra')

module.exports = function(dir, options) {
  dir = dir || ''
  var outputDir = path.resolve(options.output || dir)
  // 写入文件
  function outputFile(file, content) {
    console.log('生成页面: %s', file.slice(outputDir.length+1))
    fse.outputFileSync(file, content)
  }
  // 生成文章内容页面
  var sourceDir = path.resolve(dir, '_posts')
  utils.eachSourceFile(sourceDir, function(f, s) {
    var html = utils.renderPost(dir, f)
    var relativeFile = utils.stripExtname(f.slice(sourceDir.length + 1))+'.html'
    var file = path.resolve(outputDir, 'posts', relativeFile)
    outputFile(file, html)
  })
}
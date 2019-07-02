const showdown = require('showdown')
let converter = null

module.exports = function (data, options) {
  const cfg = this.config.markdown || {}

  if (!converter) {
    converter = new showdown.Converter(cfg)
  }

  return new Promise((resolve, reject) => {
    const result = converter.makeHtml(data.text)
    resolve(result)
  })
}

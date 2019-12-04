const atImport = require('postcss-import')
const nano = require('cssnano')

module.exports = {
  plugins: [
    atImport(),
    nano({ preset: 'default' })
  ]
}
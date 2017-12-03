var jsdom = require('jsdom')
var exposedProperties = ['window', 'navigator', 'document']

var { JSDOM } = jsdom
var { document } = new JSDOM('').window

global.document = document
global.window = document.defaultView
Object.keys(document.defaultView).forEach(property => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property)
    global[property] = document.defaultView[property]
  }
})

global.requestAnimationFrame = callback => {
  setTimeout(callback, 0)
}

global.navigator = {
  userAgent: 'node.js',
}

documentRef = document

require('babel-core/register')
require('babel-polyfill')
